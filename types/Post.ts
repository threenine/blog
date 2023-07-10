import {FeatureImage} from "~/types/FeatureImage";
import {Author} from "~/types/Author";
import {Category} from "~/types/Category";

export type Post = {
    title: string
    body: Object[]
    summary: string
    description: string
    _path: string
    featureImage: FeatureImage
    publishDate: string
    publishDateTime: Date
    author: Author
    category: Category

}



