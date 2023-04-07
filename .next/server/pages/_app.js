/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/GamesApiSlice.ts":
/*!**********************************!*\
  !*** ./src/lib/GamesApiSlice.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addGame\": () => (/* binding */ addGame),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"filterName\": () => (/* binding */ filterName),\n/* harmony export */   \"gamesApi\": () => (/* binding */ gamesApi),\n/* harmony export */   \"gamesSlice\": () => (/* binding */ gamesSlice),\n/* harmony export */   \"getGameByName\": () => (/* binding */ getGameByName),\n/* harmony export */   \"getGamesList\": () => (/* binding */ getGamesList),\n/* harmony export */   \"getRunningQueriesThunk\": () => (/* binding */ getRunningQueriesThunk),\n/* harmony export */   \"removeGame\": () => (/* binding */ removeGame),\n/* harmony export */   \"resetGames\": () => (/* binding */ resetGames),\n/* harmony export */   \"useGetGameByNameQuery\": () => (/* binding */ useGetGameByNameQuery),\n/* harmony export */   \"useGetGamesListQuery\": () => (/* binding */ useGetGamesListQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/types */ \"./src/types/index.ts\");\n\n\n\n\nconst initialState = {\n    games: _types__WEBPACK_IMPORTED_MODULE_3__.initialGames,\n    count: {\n        count: 0,\n        sum: 0\n    },\n    GreenBag: false,\n    FilterName: \"\"\n};\nconst gamesApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.createApi)({\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({\n        baseUrl: \"http://localhost:4000/api/\"\n    }),\n    extractRehydrationInfo (action, { reducerPath  }) {\n        if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.HYDRATE) {\n            return action.payload[reducerPath];\n        }\n    },\n    endpoints: (builder)=>({\n            getGameByName: builder.query({\n                query: (name)=>`games/${name}`\n            }),\n            getGamesList: builder.query({\n                query: ()=>`games/all`\n            })\n        })\n});\n// Export hooks for usage in functional components\nconst { useGetGamesListQuery , useGetGameByNameQuery , util: { getRunningQueriesThunk  }  } = gamesApi;\nconst { getGamesList , getGameByName  } = gamesApi.endpoints;\nconst gamesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"games\",\n    initialState,\n    reducers: {\n        addGame: (state, action)=>{\n            state.games.push(action.payload);\n            state.count.count = state.count.count + 1;\n            state.count.sum = state.count.sum + parseFloat(action.payload.price);\n            state.count.sum = Math.round(state.count.sum * 100) / 100;\n            if (state.count.count !== 0) {\n                state.GreenBag = true;\n            }\n        },\n        removeGame: (state, action)=>{\n            var _action_payload;\n            state.games = state.games.filter((game)=>{\n                var _action_payload;\n                return game.name !== ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.name);\n            });\n            state.count.sum = state.count.sum - parseFloat((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.price);\n            state.count.sum = Math.round(state.count.sum * 100) / 100;\n            if (state.count.count > 0) {\n                state.count.count = state.count.count - 1;\n            } else {\n                state.count = state.count;\n            }\n        },\n        resetGames: ()=>{\n            return initialState;\n        },\n        filterName: (state, action)=>{\n            state.FilterName = action.payload;\n        }\n    }\n});\nconst { addGame , removeGame , resetGames , filterName  } = gamesSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gamesSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztZQUMxQyxPQUFPO2dCQUNMeUIsTUFBTXpCLEtBQUssR0FBR3lCLE1BQU16QixLQUFLO1lBQzNCLENBQUM7UUFDSDtRQUNBa0MsWUFBWSxJQUFNO1lBQ2hCLE9BQU9wQztRQUNUO1FBQ0FxQyxZQUFhLENBQUNWLE9BQU1qQixTQUFtQztZQUNyRGlCLE1BQU10QixVQUFVLEdBQUNLLE9BQU9HLE9BQU87UUFDakM7SUFFRjtBQUNGLEdBQUU7QUFFSyxNQUFNLEVBQUVhLFFBQU8sRUFBRU8sV0FBVSxFQUFFRyxXQUFVLEVBQUdDLFdBQVUsRUFBRSxHQUFHYixXQUFXYyxPQUFPO0FBQ2xGLGlFQUFlZCxXQUFXZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9icy1hcHAvLi9zcmMvbGliL0dhbWVzQXBpU2xpY2UudHM/ZDVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdCdcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgeyBHYW1lLCBTbGljZUdhbWUsIGluaXRpYWxHYW1lcyB9IGZyb20gJ0AvdHlwZXMnXG5cbmV4cG9ydCB0eXBlIEdhbWVzU3RhdGUgPSB7XG4gIGdhbWVzOiBTbGljZUdhbWVbXVxuICBjb3VudDogeyBjb3VudDogbnVtYmVyOyBzdW06IG51bWJlciB9XG4gIEdyZWVuQmFnOiBib29sZWFuXG4gIEZpbHRlck5hbWUgOiBzdHJpbmdcbn1cbmNvbnN0IGluaXRpYWxTdGF0ZTogR2FtZXNTdGF0ZSA9IHtcbiAgZ2FtZXM6IGluaXRpYWxHYW1lcyxcbiAgY291bnQ6IHsgY291bnQ6IDAsIHN1bTogMCB9LFxuICBHcmVlbkJhZzogZmFsc2UsXG4gIEZpbHRlck5hbWUgOiBcIlwiXG59XG5cbnR5cGUgUmVtb3ZlVHlwZSA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIHByaWNlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGdhbWVzQXBpID0gY3JlYXRlQXBpKHtcbiAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7XG4gICAgYmFzZVVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvJyxcbiAgfSksXG4gIGV4dHJhY3RSZWh5ZHJhdGlvbkluZm8oYWN0aW9uLCB7IHJlZHVjZXJQYXRoIH0pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFtyZWR1Y2VyUGF0aF1cbiAgICB9XG4gIH0sXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XG4gICAgZ2V0R2FtZUJ5TmFtZTogYnVpbGRlci5xdWVyeTx7IGdhbWU6IEdhbWUgfSwgc3RyaW5nPih7XG4gICAgICBxdWVyeTogKG5hbWUpID0+IGBnYW1lcy8ke25hbWV9YCxcbiAgICB9KSxcblxuICAgIGdldEdhbWVzTGlzdDogYnVpbGRlci5xdWVyeTx7IGdhbWVzOiBBcnJheTxHYW1lPiB9LCB2b2lkPih7XG4gICAgICBxdWVyeTogKCkgPT4gYGdhbWVzL2FsbGAsXG4gICAgfSksXG4gIH0pLFxufSlcblxuLy8gRXhwb3J0IGhvb2tzIGZvciB1c2FnZSBpbiBmdW5jdGlvbmFsIGNvbXBvbmVudHNcbmV4cG9ydCBjb25zdCB7XG4gIHVzZUdldEdhbWVzTGlzdFF1ZXJ5LFxuICB1c2VHZXRHYW1lQnlOYW1lUXVlcnksXG4gIHV0aWw6IHsgZ2V0UnVubmluZ1F1ZXJpZXNUaHVuayB9LFxufSA9IGdhbWVzQXBpXG5leHBvcnQgY29uc3QgeyBnZXRHYW1lc0xpc3QsIGdldEdhbWVCeU5hbWUgfSA9IGdhbWVzQXBpLmVuZHBvaW50c1xuXG5leHBvcnQgY29uc3QgZ2FtZXNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ2dhbWVzJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGFkZEdhbWU6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFNsaWNlR2FtZT4pID0+IHtcbiAgICAgIHN0YXRlLmdhbWVzLnB1c2goYWN0aW9uLnBheWxvYWQpXG4gICAgICBzdGF0ZS5jb3VudC5jb3VudCA9IHN0YXRlLmNvdW50LmNvdW50ICsgMVxuICAgICAgc3RhdGUuY291bnQuc3VtID0gc3RhdGUuY291bnQuc3VtICsgcGFyc2VGbG9hdChhY3Rpb24ucGF5bG9hZC5wcmljZSlcbiAgICAgIHN0YXRlLmNvdW50LnN1bSA9IE1hdGgucm91bmQoc3RhdGUuY291bnQuc3VtICogMTAwKSAvIDEwMFxuICAgICAgaWYgKHN0YXRlLmNvdW50LmNvdW50ICE9PSAwKSB7XG4gICAgICAgIHN0YXRlLkdyZWVuQmFnID0gdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlR2FtZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVtb3ZlVHlwZT4pID0+IHtcbiAgICAgIHN0YXRlLmdhbWVzID0gc3RhdGUuZ2FtZXMuZmlsdGVyKFxuICAgICAgICAoZ2FtZSkgPT4gZ2FtZS5uYW1lICE9PSBhY3Rpb24ucGF5bG9hZD8ubmFtZVxuICAgICAgKVxuXG4gICAgICBzdGF0ZS5jb3VudC5zdW0gPSBzdGF0ZS5jb3VudC5zdW0gLSBwYXJzZUZsb2F0KGFjdGlvbi5wYXlsb2FkPy5wcmljZSlcbiAgICAgIHN0YXRlLmNvdW50LnN1bSA9IE1hdGgucm91bmQoc3RhdGUuY291bnQuc3VtICogMTAwKSAvIDEwMFxuXG4gICAgICBpZiAoc3RhdGUuY291bnQuY291bnQgPiAwKSB7XG4gICAgICAgIHN0YXRlLmNvdW50LmNvdW50ID0gc3RhdGUuY291bnQuY291bnQgLSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5jb3VudCA9IHN0YXRlLmNvdW50XG4gICAgICB9XG4gICAgfSxcbiAgICByZXNldEdhbWVzOiAoKSA9PiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlXG4gICAgfSxcbiAgICBmaWx0ZXJOYW1lIDogKHN0YXRlLGFjdGlvbiA6IFBheWxvYWRBY3Rpb248c3RyaW5nPikgPT4ge1xuICAgICAgc3RhdGUuRmlsdGVyTmFtZT1hY3Rpb24ucGF5bG9hZFxuICAgIH1cbiAgICBcbiAgfSxcbn0pXG5cbmV4cG9ydCBjb25zdCB7IGFkZEdhbWUsIHJlbW92ZUdhbWUsIHJlc2V0R2FtZXMgLCBmaWx0ZXJOYW1lIH0gPSBnYW1lc1NsaWNlLmFjdGlvbnNcbmV4cG9ydCBkZWZhdWx0IGdhbWVzU2xpY2UucmVkdWNlclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJIWURSQVRFIiwiaW5pdGlhbEdhbWVzIiwiaW5pdGlhbFN0YXRlIiwiZ2FtZXMiLCJjb3VudCIsInN1bSIsIkdyZWVuQmFnIiwiRmlsdGVyTmFtZSIsImdhbWVzQXBpIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsImV4dHJhY3RSZWh5ZHJhdGlvbkluZm8iLCJhY3Rpb24iLCJyZWR1Y2VyUGF0aCIsInR5cGUiLCJwYXlsb2FkIiwiZW5kcG9pbnRzIiwiYnVpbGRlciIsImdldEdhbWVCeU5hbWUiLCJxdWVyeSIsIm5hbWUiLCJnZXRHYW1lc0xpc3QiLCJ1c2VHZXRHYW1lc0xpc3RRdWVyeSIsInVzZUdldEdhbWVCeU5hbWVRdWVyeSIsInV0aWwiLCJnZXRSdW5uaW5nUXVlcmllc1RodW5rIiwiZ2FtZXNTbGljZSIsInJlZHVjZXJzIiwiYWRkR2FtZSIsInN0YXRlIiwicHVzaCIsInBhcnNlRmxvYXQiLCJwcmljZSIsIk1hdGgiLCJyb3VuZCIsInJlbW92ZUdhbWUiLCJmaWx0ZXIiLCJnYW1lIiwicmVzZXRHYW1lcyIsImZpbHRlck5hbWUiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/GamesApiSlice.ts\n");

/***/ }),

/***/ "./src/lib/store.ts":
/*!**************************!*\
  !*** ./src/lib/store.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeStore\": () => (/* binding */ makeStore),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GamesApiSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GamesApiSlice */ \"./src/lib/GamesApiSlice.ts\");\n\n\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({\n    games: _GamesApiSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    [_GamesApiSlice__WEBPACK_IMPORTED_MODULE_3__.gamesApi.reducerPath]: _GamesApiSlice__WEBPACK_IMPORTED_MODULE_3__.gamesApi.reducer\n});\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: rootReducer,\n    middleware: (gDM)=>gDM().concat(_GamesApiSlice__WEBPACK_IMPORTED_MODULE_3__.gamesApi.middleware)\n});\nconst makeStore = ()=>{\n    return store;\n};\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {\n    debug: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL3N0b3JlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNZO0FBQ3RCO0FBQ2lCO0FBRXhELE1BQU1LLGNBQWNILHNEQUFlQSxDQUFDO0lBQ2xDSSxPQUFPSCxzREFBWUE7SUFDbkIsQ0FBQ0MsZ0VBQW9CLENBQUMsRUFBRUEsNERBQWdCO0FBQzFDO0FBRUEsTUFBTUssUUFBUVQsZ0VBQWNBLENBQUM7SUFDM0JRLFNBQVNIO0lBQ1RLLFlBQVksQ0FBQ0MsTUFBUUEsTUFBTUMsTUFBTSxDQUFDUiwrREFBbUI7QUFDdkQ7QUFFTyxNQUFNUyxZQUFZLElBQU07SUFDN0IsT0FBT0o7QUFDVCxFQUFDO0FBUU0sTUFBTUssVUFBVWIsaUVBQWFBLENBQVdZLFdBQVc7SUFBRUUsT0FBTyxJQUFJO0FBQUMsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2pvYnMtYXBwLy4vc3JjL2xpYi9zdG9yZS50cz9hZDMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIsIE1ha2VTdG9yZSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHVzZXJzUmVkdWNlciwgeyBnYW1lc0FwaSB9IGZyb20gJy4vR2FtZXNBcGlTbGljZSdcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBnYW1lczogdXNlcnNSZWR1Y2VyLFxuICBbZ2FtZXNBcGkucmVkdWNlclBhdGhdOiBnYW1lc0FwaS5yZWR1Y2VyLFxufSlcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxuICBtaWRkbGV3YXJlOiAoZ0RNKSA9PiBnRE0oKS5jb25jYXQoZ2FtZXNBcGkubWlkZGxld2FyZSksXG59KVxuXG5leHBvcnQgY29uc3QgbWFrZVN0b3JlID0gKCkgPT4ge1xuICByZXR1cm4gc3RvcmVcbn1cblxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+XG5cbmV4cG9ydCB0eXBlIEFwcFN0b3JlID0gUmV0dXJuVHlwZTx0eXBlb2YgbWFrZVN0b3JlPlxuZXhwb3J0IHR5cGUgQXBwU3RhdGUgPSBSZXR1cm5UeXBlPEFwcFN0b3JlWydnZXRTdGF0ZSddPlxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSBBcHBTdG9yZVsnZGlzcGF0Y2gnXVxuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXI8QXBwU3RvcmU+KG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KVxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiY3JlYXRlV3JhcHBlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXJzUmVkdWNlciIsImdhbWVzQXBpIiwicm9vdFJlZHVjZXIiLCJnYW1lcyIsInJlZHVjZXJQYXRoIiwicmVkdWNlciIsInN0b3JlIiwibWlkZGxld2FyZSIsImdETSIsImNvbmNhdCIsIm1ha2VTdG9yZSIsIndyYXBwZXIiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/store.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var src_styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/store */ \"./src/lib/store.ts\");\n/* eslint-disable @typescript-eslint/no-unused-vars */ \n\n\n\n\n\nconst App = ({ Component , ...appProps })=>{\n    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment\n    const { store , props  } = _lib_store__WEBPACK_IMPORTED_MODULE_5__.wrapper.useWrappedStore(appProps);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...props.pageProps\n        }, void 0, false, {\n            fileName: \"/home/younesnd/games-store/src/pages/_app.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/younesnd/games-store/src/pages/_app.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW9EO0FBQ25CO0FBQ0Y7QUFFRDtBQUVRO0FBRUQ7QUFFckMsTUFBTUcsTUFBTSxDQUFDLEVBQUVDLFVBQVMsRUFBRSxHQUFHQyxVQUFvQixHQUFLO0lBQ3BELG1FQUFtRTtJQUNuRSxNQUFNLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFLEdBQUdMLCtEQUF1QixDQUFDRztJQUVqRCxxQkFDRSw4REFBQ0osaURBQVFBO1FBQUNLLE9BQU9BO2tCQUNmLDRFQUFDRjtZQUFXLEdBQUdHLE1BQU1FLFNBQVM7Ozs7Ozs7Ozs7O0FBR3BDO0FBRUEsaUVBQWVOLEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb2JzLWFwcC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnXG5pbXBvcnQgJ3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJ0AvbGliL3N0b3JlJ1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIC4uLmFwcFByb3BzIH06IEFwcFByb3BzKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcbiAgY29uc3QgeyBzdG9yZSwgcHJvcHMgfSA9IHdyYXBwZXIudXNlV3JhcHBlZFN0b3JlKGFwcFByb3BzKVxuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wcm9wcy5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3ZpZGVyIiwid3JhcHBlciIsIkFwcCIsIkNvbXBvbmVudCIsImFwcFByb3BzIiwic3RvcmUiLCJwcm9wcyIsInVzZVdyYXBwZWRTdG9yZSIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialGames\": () => (/* binding */ initialGames)\n/* harmony export */ });\nconst initialGames = [\n    {\n        id: \"\",\n        name: \"\",\n        price: \"\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHlwZXMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQW9CTyxNQUFNQSxlQUFlO0lBQzFCO1FBQ0VDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO0lBQ1Q7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2pvYnMtYXBwLy4vc3JjL3R5cGVzL2luZGV4LnRzPzQ0MTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgR2FtZSA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIHN1cm5hbWU6IHN0cmluZ1xuICBwcmljZTogc3RyaW5nXG4gIGRlc2M6IHN0cmluZ1xuICBsaW5rOiBzdHJpbmdcbiAgcmVsZWFzZTogc3RyaW5nXG4gIHBsYXRmb3Jtczogc3RyaW5nXG4gIGdlbnJlOiBzdHJpbmdcbiAgZGV2ZWxvcGVyczogc3RyaW5nXG4gIHB1Ymxpc2hlcnM6IHN0cmluZ1xuICBpbkNhcnQ6IGJvb2xlYW5cbiAgc2VsZWN0ZWQ6IGJvb2xlYW5cbiAgaXNIb3ZlcmVkOiBib29sZWFuXG4gIGlzTGlrZWQ6IGJvb2xlYW5cbiAgcmF0aW5nOiBudW1iZXJcbiAgaWQ6IG51bWJlclxuICBjb3Zlcjogc3RyaW5nXG4gIGZvb3RhZ2U6IHN0cmluZ1tdXG59XG5leHBvcnQgY29uc3QgaW5pdGlhbEdhbWVzID0gW1xuICB7XG4gICAgaWQ6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIHByaWNlOiAnJyxcbiAgfSxcbl1cblxuZXhwb3J0IHR5cGUgU2xpY2VHYW1lID0ge1xuICBpZDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBwcmljZTogc3RyaW5nXG59XG4iXSwibmFtZXMiOlsiaW5pdGlhbEdhbWVzIiwiaWQiLCJuYW1lIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/types/index.ts\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();