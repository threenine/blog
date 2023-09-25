
export interface ThreenineSchema {
    name: string
    description: string
    home_url: string
    site_url: string
    webmaster: string
    socials :  Array<SocialLink>

}

export interface SocialLink {
    name: string
    url: string
    icon: string
}