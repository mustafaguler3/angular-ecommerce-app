import { Category } from "../types/category";

export const categories: Category[] = [
    {
        id:1,
        category: "Men",
        parent_category_id:1
    },
    {
        id:2,
        category: "Women"
    },
    {
        id:3,
        category: "Kids",
        parent_category_id:2
    },
    {
        id:4,
        category: "Party Wear",
        parent_category_id:1
    },
    {
        id:5,
        category: "Foot Wear",
        parent_category_id:2
    }
]