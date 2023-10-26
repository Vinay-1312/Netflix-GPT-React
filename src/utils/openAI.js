import OpenAI from 'openai';
import { abcd } from './constant';
<<<<<<< HEAD

=======
>>>>>>> 2b86f42359e16799f846c899344bf4ef27348e25
const openai = new OpenAI({
  apiKey: abcd,
  dangerouslyAllowBrowser:true // defaults to process.env["OPENAI_API_KEY"]
});

export default openai;
