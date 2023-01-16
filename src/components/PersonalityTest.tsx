// This is pure chaos.

import { useState } from "react";

import { useSpring, animated } from "react-spring";

import data from "src/questions.json";

let aCount = 0,
  bCount = 0,
  aCount2 = 0,
  bCount2 = 0,
  aCount3 = 0,
  bCount3 = 0,
  aCount4 = 0,
  bCount4 = 0;

export default function PersonalityTest() {
  const [showIntro, setShowIntro] = useState(true);
  const [showResults, setShowResults] = useState(false);

  const [questionNumber, setQuestionNumber] = useState(0);

  const [personality, setPersonality] = useState<string[]>([]);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
  });

  //const fadeOut = useSpring({
  //from: { opacity: 1 },
  //to: { opacity: 0 },
  //});

  function nextQuestion(chosenChoice: number) {
    for (let i = 0; i < data.questions.length; i++) {
      switch (questionNumber) {
        case 7 * i:
          chosenChoice == 0 ? aCount++ : bCount++;
          break;

        case 7 * i + 1:
          chosenChoice == 0 ? aCount2++ : bCount2++;
          break;

        case 7 * i + 2:
          chosenChoice == 0 ? aCount3++ : bCount3++;
          break;

        case 7 * i + 3:
          chosenChoice == 0 ? aCount4++ : bCount4++;
          break;

        default:
          break;
      }
    }

    questionNumber + 1 < data.questions.length
      ? setQuestionNumber(questionNumber + 1)
      : calculateResults();
  }

  function calculateResults() {
    setPersonality((personality) => [
      ...personality,
      aCount > bCount ? "E" : "I",
    ]);
    setPersonality((personality) => [
      ...personality,
      aCount2 > bCount2 ? "S" : "N",
    ]);
    setPersonality((personality) => [
      ...personality,
      aCount3 > bCount3 ? "T" : "F",
    ]);
    setPersonality((personality) => [
      ...personality,
      aCount4 > bCount4 ? "J" : "P",
    ]);

    setShowResults(true);
  }

  return (
    <main className="h-full">
      {showIntro && (
        <animated.div
          style={fadeIn}
          className="flex justify-center items-center flex-col text-center p-10 h-full"
        >
          <h2 className="text-5xl font-bold">MBTI Personality Test</h2>
          <br />
          <br />
          <p className="text-lg">
            Please note that the results are not 100% accurate.
          </p>
          <br />
          <br />
          <button onClick={() => setShowIntro(false)}>Begin the Test</button>
        </animated.div>
      )}
      {!showIntro && !showResults && (
        <animated.div
          style={fadeIn}
          className="flex items-center text-center h-full flex-col lg:flex-row"
        >
          <div className="flex-1 hidden lg:block">
            <h3 className="text-4xl font-bold">
              Question {questionNumber + 1}:
            </h3>
            <br />
            <p className="text-xl">{data.questions[questionNumber]![0]}</p>
          </div>
          <div className="flex-1 hidden lg:block">
            <div className="mb-2">
              <button onClick={() => nextQuestion(0)}>
                {data.questions[questionNumber]![1]}
              </button>
            </div>
            <div className="mt-2">
              <button onClick={() => nextQuestion(1)}>
                {data.questions[questionNumber]![2]}
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col text-center p-10 h-full block lg:hidden">
            <h3 className="text-4xl font-bold">
              Question {questionNumber + 1}:
            </h3>
            <br />
            <p className="text-xl">{data.questions[questionNumber]![0]}</p>
            <br />
            <br />
            <div className="mb-2">
              <button onClick={() => nextQuestion(0)}>
                {data.questions[questionNumber]![1]}
              </button>
            </div>
            <div className="mt-2">
              <button onClick={() => nextQuestion(1)}>
                {data.questions[questionNumber]![2]}
              </button>
            </div>
          </div>
        </animated.div>
      )}
      {showResults && (
        <animated.div className="flex justify-center items-center flex-col text-center p-10 h-full">
          <h2 className="text-5xl font-bold">Your personality is...</h2>
          <br />
          <br />
          <p className="text-2xl">{personality}</p>
        </animated.div>
      )}
    </main>
  );
}
