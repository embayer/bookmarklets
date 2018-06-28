const table = document.getElementById('issuetable');
const issues = [];
for (let i = 0, row; row = table.rows[i]; i++) {
  let issue = {};
  for (let j = 0, col; col = row.cells[j]; j++) {
    issue[col.classList[0]] = col.innerText;
  }
  issues.push(issue);
}
function popup (elemList) {
  const modal = document.createElement('DIV');
  modal.id = 'my-unique-modal';
  modal.style.cssText = 'position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);';

  const modalContent = document.createElement('DIV');
  modalContent.style.cssText = 'background-color: #fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%;';

  const modalCloseBtn = document.createElement('SPAN');
  modalCloseBtn.innerHTML = '&times;';
  modalCloseBtn.style.cssText = 'cursor: pointer; color: #aaa; float: right; font-size: 28px; font-weight: bold;';
  modalCloseBtn.onclick = function (event) {
    document.getElementById('my-unique-modal').remove();
  };

  const content = document.createElement('DIV');
  elemList.forEach(x => {
    const paragraph = document.createElement('P');
    paragraph.innerText = x;
    content.appendChild(paragraph);
  });

  modalContent.appendChild(modalCloseBtn);
  modalContent.appendChild(content);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}
popup(issues.map(x => `* ${x.issuekey}\t ${x.summary}`));
