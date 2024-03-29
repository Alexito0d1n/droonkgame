import { useEffect, useState, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Button } from "/components";
import AppContext from "/context/AppContext";

export default function Config() {
  const router = useRouter();
  const {
    setFilters,
    setCustomGame,
    levels,
    topics,
    categories,
    languages,
  } = useContext(AppContext);

  const [allowedLevels, setAllowedLevels] = useState([]);
  const [allowedTopics, setAllowedTopics] = useState([]);
  const [allowedCategories, setAllowedCategories] = useState([]);
  const [allowedLanguages, setAllowedLanguages] = useState([]);

  useEffect(() => {
    setFilters({
      allowedLevels,
      allowedCategories,
      allowedLanguages,
      allowedTopics,
    });
  }, [allowedLevels, allowedCategories, allowedLanguages, allowedTopics]);


  const handleTopicClick = (topic) => {
    let newTopics = allowedTopics;
    if (newTopics.includes(topic.id)) {
      newTopics = newTopics.filter((t) => t !== topic.id);
    } else {
      newTopics.push(topic.id);
    }
    setAllowedTopics([...newTopics]);
  };

  const handleCategoriesClick = (category) => {
    let newCategories = allowedCategories;
    if (newCategories.includes(category.id)) {
      newCategories = newCategories.filter((t) => t !== category.id);
    } else {
      newCategories.push(category.id);
    }
    setAllowedCategories([...newCategories]);
  };

  const handleLevelsClick = (level) => {
    let newLevels = allowedLevels;
    if (newLevels.includes(level.id)) {
      newLevels = newLevels.filter((t) => t !== level.id);
    } else {
      newLevels.push(level.id);
    }
    setAllowedLevels([...newLevels]);
  };

  const handleLanguagesClick = (language) => {
    let newLanguages = allowedLanguages;
    if (newLanguages.includes(language.id)) {
      newLanguages = newLanguages.filter((t) => t !== language.id);
    } else {
      newLanguages.push(language.id);
    }
    setAllowedLanguages([...newLanguages]);
  };

  return (
    <div className="config-container">
      <Head>
        <title>DroonkGame | Config</title>
        <meta name="description" content="A mi me están grabando" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="config-main">
        <div className="checkbox-config-container">
          <h2>Topics</h2>
          {topics.map((topic) => (
            <div key={topic.id} className="input-checkbox">
              <input
                type="checkbox"
                id="option"
                name="option"
                value={topic.id}
                checked={allowedTopics.includes(topic.id)}
                onChange={() => handleTopicClick(topic)}
              />
              <label className="label-column">
                <h4>{topic.name[0].toUpperCase() + topic.name.substring(1)}</h4>
                <p>{topic.description}</p>
              </label>
            </div>
          ))}
        </div>

        <div className="checkbox-config-container">
          <h2>Categories</h2>
          {categories.map((category) => (
            <div key={category.id} className="input-checkbox">
              <input
                type="checkbox"
                id="option"
                name="option"
                value={category.id}
                checked={allowedCategories.includes(category.id)}
                onChange={() => handleCategoriesClick(category)}
              />
              <label className="label-column">
                <h4>{category.name[0].toUpperCase() + category.name.substring(1)}</h4>
                <p>{category.description}</p>
              </label>
            </div>
          ))}
        </div>

        <div className="checkbox-config-container">
          <h2>Levels</h2>
          {levels.map((level) => (
            <div key={level.id} className="input-checkbox">
              <input
                type="checkbox"
                id="option"
                name="option"
                value={level.id}
                checked={allowedLevels.includes(level.id)}
                onChange={() => handleLevelsClick(level)}
              />
              <label className="label-column">
                <h4>{level.name[0].toUpperCase() + level.name.substring(1)}</h4>
                <p>{level.description}</p>
              </label>
            </div>
          ))}
        </div>

        <div className="checkbox-config-container">
          <h2>Languages</h2>
          {languages.map((language) => (
            <div key={language.id} className="input-checkbox">
              <input
                type="checkbox"
                id="option"
                name="option"
                value={language.id}
                checked={allowedLanguages.includes(language.id)}
                onChange={() => handleLanguagesClick(language)}
              />
              <label className="label-column">
                <h4>{language.name[0].toUpperCase() + language.name.substring(1)}</h4>
              </label>
            </div>
          ))}
        </div>
        <Button
          action={() => {
            setCustomGame(true);
            router.push("/play");
          }}
          disabled={
            allowedCategories.length === 0 ||
            allowedLanguages.length === 0 ||
            allowedLevels.length === 0 ||
            allowedTopics.length === 0
          }
        >
          COMENZAR PARTIDA
        </Button>
      </main>
    </div>
  );
}
