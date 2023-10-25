import OpenAI from 'openai';
import { OPenAIKey } from './constant';
const openai = new OpenAI({
  apiKey: OPenAIKey,
  dangerouslyAllowBrowser:true // defaults to process.env["OPENAI_API_KEY"]
});

export default openai;