import React, { useState, useEffect } from "react";
import tService from "../services/translationServices";

const TranslateText = ({ defaultText, resourceId }) => {
  const [translatedText, setTranslatedText] = useState(defaultText);
  const localeId = tService.getCurrentLocale();
  useEffect(() => {
    const translateText = async () => {
      const Text = await tService.getTranslationForResource(
        resourceId.replace(/\s+/g, "_"),
        defaultText
      );

      setTranslatedText(Text);
    };
    if (localeId !== "en-uk") translateText(defaultText, resourceId);
    else setTranslatedText(defaultText);
  }, [defaultText, localeId, resourceId]);
  return <span>{translatedText || defaultText}</span>;
};

export default TranslateText;
