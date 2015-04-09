export default (input)=>
  input
    .replace(/\(c\)/gim, '©')
    .replace(/© *(\d)/gim, '© $1');
