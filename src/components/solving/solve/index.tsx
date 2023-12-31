const Solve = ({ params }: any) => {
  console.log(params);
  return <div></div>;
};

export function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params,
    },
  };
}
export default Solve;
