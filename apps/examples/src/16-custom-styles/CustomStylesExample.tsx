import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import { CardShape, CardShapeTool } from './CardShape'
import { FilterStyleUi } from './FilterStyleUi'
import { uiOverrides } from './ui-overrides'

const shapes = [CardShape]

export default function CustomStylesExample() {
	return (
		<div className="tldraw__editor">
			<Tldraw
				autoFocus
				persistenceKey="custom-styles-example"
				shapes={shapes}
				tools={[CardShapeTool]}
				overrides={uiOverrides}
			>
				<FilterStyleUi />
			</Tldraw>
		</div>
	)
}