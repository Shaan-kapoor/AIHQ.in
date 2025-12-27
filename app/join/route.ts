import { redirect } from "next/navigation"

// You can change this link at any time in this file.
const WHATSAPP_COMMUNITY_LINK = "https://chat.whatsapp.com/BaE3juM1Qlh0U5O1tlJgIj"

export async function GET() {
  redirect(WHATSAPP_COMMUNITY_LINK)
}
