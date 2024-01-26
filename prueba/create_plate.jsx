const Create_plate = () => {
  {
    const description_plate = {
      id: 1,
      name: "Chaufa",
      detail: "Solo con pollo, no chancho",
      amount: 1,
    };

    return (
      <ol>
        <ul>{description_plate.order_name}</ul>
        <ul>{description_plate.amount} X</ul>
        <ul>{description_plate.detail}</ul>
      </ol>
    );
  }
};

export default Create_plate