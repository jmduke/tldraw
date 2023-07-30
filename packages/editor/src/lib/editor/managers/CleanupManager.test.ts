import { createTLStore } from '../../config/createTLStore'
import { Editor } from '../Editor'

let editor: Editor
beforeEach(() => {
	editor = new Editor({
		shapeUtils: [],
		tools: [],
		store: createTLStore({ shapeUtils: [] }),
		getContainer: () => document.body,
	})
})

it.todo('Registers a batch complete handler')