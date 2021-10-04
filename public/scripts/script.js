function update(taskid, statusid, table) {
  let status = document.getElementById(statusid).checked;
  fetch(`/${table}`, {
    method: "POST",
    body: new URLSearchParams({
      status: status,
      id: taskid,
    }),
  });
  setTimeout(() => {
    location.reload()
}, 0);
}

function removetask(taskid , table){
    fetch(`/${table}`, {
        method: "POST",
        body: new URLSearchParams({
          'remove':'true',
          'id': taskid,
        }),
    });
    setTimeout(() => {
        location.reload()
    }, 0);
}
