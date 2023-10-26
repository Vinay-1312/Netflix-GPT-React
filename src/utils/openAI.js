import OpenAI from 'openai';
import { abcd } from './constant';

const openai = new OpenAI({
  apiKey: abcd,
  dangerouslyAllowBrowser:true // defaults to process.env["OPENAI_API_KEY"]
});

export default openai;