// import React, { useEffect, useReducer } from "react";

// function reducer(state, { type, payload }) {
//   switch (type) {
//     case "default":
//       return { ...state, ...payload };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       return { ...state, [type]: payload };
//   }
// }

// const [translatedTexts, setTranslatedTexts] = useReducer(reducer, defaultTexts);

// useEffect(() => {
//   const getTranslation = async (resourceId, defaultText) => {
//     const translatedText = await tService.getTranslationForResource(
//       resourceId,
//       defaultText
//     );

//     return translatedText;
//   };

//   if (localeId === "en-uk") {
//     setTranslatedTexts({ type: "default", payload: defaultTexts });
//   } else {
//     Object.entries(defaultTexts).forEach(async ([key, value]) => {
//       const text = await getTranslation(key, value);
//       setTranslatedTexts({ type: key, payload: text });
//     });
//   }
// }, [localeId]);
