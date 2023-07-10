import {FeatureImage} from "~/types/FeatureImage";
import {Author} from "~/types/Author";

export type PostHeading = {
    title: string
    subtitle: string
    featureImage: FeatureImage
    summary: string
    author: Author
    publishDate: string
}
