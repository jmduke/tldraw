import { useEditor } from '@tldraw/editor'
import { useEffect } from 'react'

export function useSideEffects() {
	const editor = useEditor()

	useEffect(() => {
		return editor.sideEffects.registerAfterChangeHandler('instance_page_state', (prev, next) => {
			if (prev.croppingShapeId !== next.croppingShapeId) {
				const isInCroppingState = editor.isInAny(
					'select.crop',
					'select.pointing_crop_handle',
					'select.cropping'
				)
				if (!prev.croppingShapeId && next.croppingShapeId) {
					if (!isInCroppingState) {
						editor.setCurrentTool('select.crop.idle')
					}
				} else if (prev.croppingShapeId && !next.croppingShapeId) {
					if (isInCroppingState) {
						editor.setCurrentTool('select.idle')
					}
				}
			}

			if (prev.editingShapeId !== next.editingShapeId) {
				if (!prev.editingShapeId && next.editingShapeId) {
					if (!editor.isIn('select.editing_shape')) {
						editor.setCurrentTool('select.editing_shape')
					}
				} else if (prev.editingShapeId && !next.editingShapeId) {
					if (editor.isIn('select.editing_shape')) {
						editor.setCurrentTool('select.idle')
					}
				}
			}
		})
	}, [editor])
}
