export async function sendEmail(req, res) {
  await res.status(200).json("test email")
}