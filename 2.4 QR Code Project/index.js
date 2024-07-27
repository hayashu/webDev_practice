/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { input } from '@inquirer/prompts';
import {image} from 'qr-image';
import { createWriteStream } from 'fs';
import { writeFile } from 'fs';

const url = await input({ message: 'Enter URL for QR' });
// console.log(answer);

var qr = image(url, { type: 'png' });
qr.pipe(createWriteStream('qr_img.png'));

writeFile('URL.txt', url, (err)=>{
  if (err) throw err;
  console.log('The file has been saved!');
});