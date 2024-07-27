var code = image('http://www.google.com', { type: 'png' });
res.setHeader('Content-type', 'image/png');  //sent qr image to client side
code.pipe(res);