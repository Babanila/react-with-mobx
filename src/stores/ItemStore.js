import { observable } from "mobx"
import items from "../pages/items"

class ItemStore {
  @observable items = [...items]

  @observable searchItem = { userInput: "" }
}

export default new ItemStore()
