
import {Category} from "~/types/Category";

declare class Post  {
    title: string;
    body: Object[];
    summary: string;
    description: string;
    _path: string;
    featureImage: FeatureImage;
    publishDate: string;
    publishDateTime: Date;
    author: Author;
    category: Category;

}



