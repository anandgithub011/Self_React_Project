function TodoItem2() {
  let todoNmae = "Go to College";
  let todoDate = "4/10/2023";

  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{todoNmae}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-butoon">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
