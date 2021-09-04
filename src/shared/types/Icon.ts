import { iconsIds } from "../data/icons"

export default interface Icon {
    id: IconId
    icon: string
    tags: string[]
}

export type IconId = typeof iconsIds[number]