import  type { Request, Response } from 'express';
import dotenv from 'dotenv'
import express from 'express'
import connectDB from "./src/config/db.js"
import cors from 'cors'
dotenv.config();

import  {Router} from 'express'
import { OAuth2Client} from 'google-auth-library';

export const app = express();
const port = process.env.PORT;

app.use(express.json());

const router=Router();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello!');
});


app.use(express.json());
app.use(cors({ 
  origin: "http://localhost:5173" 
}))

connectDB ()
.then(() => {
  app.listen(port || 3000, () => {
    console.log(`Server is running on port 3000`);
  });
});

const CLIENT_ID = process.env.client_id;
const client = new OAuth2Client(CLIENT_ID);




async function verifyIdToken(req:Request,res:Response) {

  const {token}=req.body

   const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID || "",
    });
  try {
   
    const payload = ticket.getPayload();
   
    if(!payload){
       res.status(400).json({
        error:"Invalid"
       })
    }


    console.log('Token verified. User data:', payload,token);
    return payload;

    

  } catch (error) {
    console.error('Error verifying Google ID token:', error);
    throw new Error('Invalid ID token');
  }
}

app.post("/api/login", verifyIdToken);

