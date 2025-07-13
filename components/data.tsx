export const tags = [
  "Body posture",
  "Nutrition tips",
  "Weight loss",
  "Weight gain",
  "Health status",
  "Arm/Shoulder fitness",
  "Nice shape",
  "Health improvement",
  "Body fit",
  "Motivation",
  "Weight watch",
  "Nutrition",
  "Physical fitness",
  "Leg fitness",
  "Fitness programs",
  "Intake Monitoring",
  "Others",
];

export const workoutPlans = [
  {
    title: "ABS Beginner",
    daysDivided: false,
    numberOfDays: 0,
    daysArray: [],
    numOfWorkouts: 12,
    workouts: [
      Array(6).fill({
        id: 100,
        name: "Jumping Jacks",
        instruction: (
          <>
            <p>
              Start with your feet together and your arms by your sides, then
              jump up with your feet apart and your hands overhead.
            </p>
            <p>
              Return to the start position then do the next rep. This exercise
              provides a full-body workout and works all your
              large muscle groups.
            </p>
          </>
        ),
        imageSrc: require("../assets/jumping_jacks.png"),
      }),
    ],
  },
];
