
export interface ThreenineSchema {
    name: string
    description: string
    home_url: string
    site_url: string
    webmaster: string
    socials :  Array<Link>
    categories: Array<string>

}

export interface Link {
    name: string
    url: string
    icon: string
}