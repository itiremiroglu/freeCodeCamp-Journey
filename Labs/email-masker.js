function maskEmail(mail) {
  const indexNum = mail.indexOf("@");
  const user = mail.slice(0, indexNum);
  const domain = mail.slice(indexNum);
  return user[0] + "*".repeat(user.length - 2) + user[user.length - 1] + domain;
}
console.log(maskEmail("apple.pie@example.com")); // Output: a*******e@example.com
