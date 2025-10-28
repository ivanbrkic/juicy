/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./assets/src/admin/gutenberg.js ***!
  \***************************************/
/**
 * Gutenberg.
 */
/* global wp, lodash */

/**
 * Edit Gutenberg settings.
 * @return {void}
 */
wp.domReady(function () {
  // Remove quote styles.
  wp.blocks.unregisterBlockStyle('core/quote', 'default');
  wp.blocks.unregisterBlockStyle('core/quote', 'large');
  wp.blocks.unregisterBlockStyle('core/quote', 'plain');
  // Remove image styles.
  wp.blocks.unregisterBlockStyle('core/image', 'default');
  wp.blocks.unregisterBlockStyle('core/image', 'rounded');

  // Unregister blocks.
  // Define the blocks we support.
  var allowedBlocks = new Set(['core/paragraph', 'core/heading', 'core/list', 'core/list-item', 'core/image', 'core/quote', 'core/gallery', 'core/embed', 'core/video', 'core/audio', 'core/freeform']);
  // Unregister all blocks that are not the ones we support.
  wp.blocks.getBlockTypes().forEach(function (blockType) {
    if (!allowedBlocks.has(blockType.name)) {
      wp.blocks.unregisterBlockType(blockType.name);
    }
  });

  // Remove embed block variations.
  // Define the variations we support.
  var allowedEmbedBlocks = new Set(['twitter', 'vimeo', 'youtube']);
  // Unregister all embed block variations that are not the ones we support.
  wp.blocks.getBlockVariations('core/embed').forEach(function (blockVariation) {
    if (!allowedEmbedBlocks.has(blockVariation.name)) {
      wp.blocks.unregisterBlockVariation('core/embed', blockVariation.name);
    }
  });
});

/**
 * Disable alignment for some blocks
 * @return {array}
 */
wp.hooks.addFilter('blocks.registerBlockType', 'playground/gutenberg', function (settings, name) {
  var blocks = new Set(['core/gallery', 'core/video', 'core/audio', 'core/embed']);
  if (blocks.has(name)) {
    return lodash.assign({}, settings, {
      supports: lodash.assign({}, settings.supports, {
        align: false
      })
    });
  }
  return settings;
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2FkbWluL2d1dGVuYmVyZy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLFlBQU07RUFDaEI7RUFDQUQsRUFBRSxDQUFDRSxNQUFNLENBQUNDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxTQUFTLENBQUM7RUFDdkRILEVBQUUsQ0FBQ0UsTUFBTSxDQUFDQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO0VBQ3JESCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0Msb0JBQW9CLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQztFQUNyRDtFQUNBSCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0Msb0JBQW9CLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQztFQUN2REgsRUFBRSxDQUFDRSxNQUFNLENBQUNDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxTQUFTLENBQUM7O0VBRXZEO0VBQ0E7RUFDQSxJQUFNQyxhQUFhLEdBQUcsSUFBSUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztFQUN2TTtFQUNBTCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0ksYUFBYSxFQUFFLENBQUNDLE9BQU8sQ0FBQyxVQUFBQyxTQUFTLEVBQUk7SUFDN0MsSUFBSSxDQUFDSixhQUFhLENBQUNLLEdBQUcsQ0FBQ0QsU0FBUyxDQUFDRSxJQUFJLENBQUMsRUFBRTtNQUN0Q1YsRUFBRSxDQUFDRSxNQUFNLENBQUNTLG1CQUFtQixDQUFDSCxTQUFTLENBQUNFLElBQUksQ0FBQztJQUMvQztFQUNGLENBQUMsQ0FBQzs7RUFFRjtFQUNBO0VBQ0EsSUFBTUUsa0JBQWtCLEdBQUcsSUFBSVAsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztFQUNuRTtFQUNBTCxFQUFFLENBQUNFLE1BQU0sQ0FBQ1csa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUNOLE9BQU8sQ0FBQyxVQUFBTyxjQUFjLEVBQUk7SUFDbkUsSUFBSSxDQUFDRixrQkFBa0IsQ0FBQ0gsR0FBRyxDQUFDSyxjQUFjLENBQUNKLElBQUksQ0FBQyxFQUFFO01BQ2hEVixFQUFFLENBQUNFLE1BQU0sQ0FBQ2Esd0JBQXdCLENBQUMsWUFBWSxFQUFFRCxjQUFjLENBQUNKLElBQUksQ0FBQztJQUN2RTtFQUNGLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQzs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBVixFQUFFLENBQUNnQixLQUFLLENBQUNDLFNBQVMsQ0FDaEIsMEJBQTBCLEVBQzFCLHNCQUFzQixFQUN0QixVQUFDQyxRQUFRLEVBQUVSLElBQUksRUFBSztFQUNsQixJQUFNUixNQUFNLEdBQUcsSUFBSUcsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7RUFFbEYsSUFBSUgsTUFBTSxDQUFDTyxHQUFHLENBQUNDLElBQUksQ0FBQyxFQUFFO0lBQ3BCLE9BQU9TLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFRixRQUFRLEVBQUU7TUFDakNHLFFBQVEsRUFBRUYsTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVGLFFBQVEsQ0FBQ0csUUFBUSxFQUFFO1FBQzdDQyxLQUFLLEVBQUU7TUFDVCxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxPQUFPSixRQUFRO0FBQ2pCLENBQUMsQ0FDRixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL2Fzc2V0cy9zcmMvYWRtaW4vZ3V0ZW5iZXJnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR3V0ZW5iZXJnLlxuICovXG4vKiBnbG9iYWwgd3AsIGxvZGFzaCAqL1xuXG4vKipcbiAqIEVkaXQgR3V0ZW5iZXJnIHNldHRpbmdzLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xud3AuZG9tUmVhZHkoKCkgPT4ge1xuICAvLyBSZW1vdmUgcXVvdGUgc3R5bGVzLlxuICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvcXVvdGUnLCAnZGVmYXVsdCcpO1xuICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvcXVvdGUnLCAnbGFyZ2UnKTtcbiAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1N0eWxlKCdjb3JlL3F1b3RlJywgJ3BsYWluJyk7XG4gIC8vIFJlbW92ZSBpbWFnZSBzdHlsZXMuXG4gIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9pbWFnZScsICdkZWZhdWx0Jyk7XG4gIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tTdHlsZSgnY29yZS9pbWFnZScsICdyb3VuZGVkJyk7XG5cbiAgLy8gVW5yZWdpc3RlciBibG9ja3MuXG4gIC8vIERlZmluZSB0aGUgYmxvY2tzIHdlIHN1cHBvcnQuXG4gIGNvbnN0IGFsbG93ZWRCbG9ja3MgPSBuZXcgU2V0KFsnY29yZS9wYXJhZ3JhcGgnLCAnY29yZS9oZWFkaW5nJywgJ2NvcmUvbGlzdCcsICdjb3JlL2xpc3QtaXRlbScsICdjb3JlL2ltYWdlJywgJ2NvcmUvcXVvdGUnLCAnY29yZS9nYWxsZXJ5JywgJ2NvcmUvZW1iZWQnLCAnY29yZS92aWRlbycsICdjb3JlL2F1ZGlvJywgJ2NvcmUvZnJlZWZvcm0nXSk7XG4gIC8vIFVucmVnaXN0ZXIgYWxsIGJsb2NrcyB0aGF0IGFyZSBub3QgdGhlIG9uZXMgd2Ugc3VwcG9ydC5cbiAgd3AuYmxvY2tzLmdldEJsb2NrVHlwZXMoKS5mb3JFYWNoKGJsb2NrVHlwZSA9PiB7XG4gICAgaWYgKCFhbGxvd2VkQmxvY2tzLmhhcyhibG9ja1R5cGUubmFtZSkpIHtcbiAgICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKGJsb2NrVHlwZS5uYW1lKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFJlbW92ZSBlbWJlZCBibG9jayB2YXJpYXRpb25zLlxuICAvLyBEZWZpbmUgdGhlIHZhcmlhdGlvbnMgd2Ugc3VwcG9ydC5cbiAgY29uc3QgYWxsb3dlZEVtYmVkQmxvY2tzID0gbmV3IFNldChbJ3R3aXR0ZXInLCAndmltZW8nLCAneW91dHViZSddKTtcbiAgLy8gVW5yZWdpc3RlciBhbGwgZW1iZWQgYmxvY2sgdmFyaWF0aW9ucyB0aGF0IGFyZSBub3QgdGhlIG9uZXMgd2Ugc3VwcG9ydC5cbiAgd3AuYmxvY2tzLmdldEJsb2NrVmFyaWF0aW9ucygnY29yZS9lbWJlZCcpLmZvckVhY2goYmxvY2tWYXJpYXRpb24gPT4ge1xuICAgIGlmICghYWxsb3dlZEVtYmVkQmxvY2tzLmhhcyhibG9ja1ZhcmlhdGlvbi5uYW1lKSkge1xuICAgICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsIGJsb2NrVmFyaWF0aW9uLm5hbWUpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLyoqXG4gKiBEaXNhYmxlIGFsaWdubWVudCBmb3Igc29tZSBibG9ja3NcbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG53cC5ob29rcy5hZGRGaWx0ZXIoXG4gICdibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUnLFxuICAncGxheWdyb3VuZC9ndXRlbmJlcmcnLFxuICAoc2V0dGluZ3MsIG5hbWUpID0+IHtcbiAgICBjb25zdCBibG9ja3MgPSBuZXcgU2V0KFsnY29yZS9nYWxsZXJ5JywgJ2NvcmUvdmlkZW8nLCAnY29yZS9hdWRpbycsICdjb3JlL2VtYmVkJ10pO1xuXG4gICAgaWYgKGJsb2Nrcy5oYXMobmFtZSkpIHtcbiAgICAgIHJldHVybiBsb2Rhc2guYXNzaWduKHt9LCBzZXR0aW5ncywge1xuICAgICAgICBzdXBwb3J0czogbG9kYXNoLmFzc2lnbih7fSwgc2V0dGluZ3Muc3VwcG9ydHMsIHtcbiAgICAgICAgICBhbGlnbjogZmFsc2UsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldHRpbmdzO1xuICB9LFxuKTtcbiJdLCJuYW1lcyI6WyJ3cCIsImRvbVJlYWR5IiwiYmxvY2tzIiwidW5yZWdpc3RlckJsb2NrU3R5bGUiLCJhbGxvd2VkQmxvY2tzIiwiU2V0IiwiZ2V0QmxvY2tUeXBlcyIsImZvckVhY2giLCJibG9ja1R5cGUiLCJoYXMiLCJuYW1lIiwidW5yZWdpc3RlckJsb2NrVHlwZSIsImFsbG93ZWRFbWJlZEJsb2NrcyIsImdldEJsb2NrVmFyaWF0aW9ucyIsImJsb2NrVmFyaWF0aW9uIiwidW5yZWdpc3RlckJsb2NrVmFyaWF0aW9uIiwiaG9va3MiLCJhZGRGaWx0ZXIiLCJzZXR0aW5ncyIsImxvZGFzaCIsImFzc2lnbiIsInN1cHBvcnRzIiwiYWxpZ24iXSwic291cmNlUm9vdCI6IiJ9