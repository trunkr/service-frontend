interface SolveProps {
  selectedQuizIds: string;
}

const Solve = ({ selectedQuizIds }: SolveProps) => {
  console.log(selectedQuizIds);
  return <div>solve다!</div>;
};

export default Solve;
