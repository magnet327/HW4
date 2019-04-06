const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const msgBox = document.querySelector('#msg');
const subject = document.querySelector('#subject');
const telInput = document.querySelector('#tel');
const genderInput = document.querySelector('#gender');
const userList = document.querySelector('#user');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    //console.log(nameInput.value + ' ' + emailInput.value);

    if (nameInput.value === '' || emailInput.value === '' || subject.value === '' || telInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    } else {
        const li = document.createElement('li');
        var imageRemove = document.createElement('img');
        const sub1 = document.createElement('h3');
        const sub2 = document.createElement('p');
        const text = document.createTextNode(`Name: ${nameInput.value}` +  ` Gender: ${genderInput.value}` + ` Email: ${emailInput.value}` + ` Tel: ${telInput.value}`);
        const text2 = document.createTextNode(`${subject.value}`);
        const text3 = document.createTextNode(`${msgBox.value}`);
        imageRemove.setAttribute('src', 'http://findicons.com/files/icons/1580/devine_icons_part_2/128/trash_recyclebin_empty_closed.png', 'right');
        li.appendChild(text);
        //console.log(li);
        sub1.appendChild(text2);
        sub2.appendChild(text3);
        userList.appendChild(li);
        userList.appendChild(sub1);
        userList.appendChild(sub2);
        userList.appendChild(imageRemove);
        nameInput.value = '';
        emailInput.value = '';
        genderInput.value = '';
        msg.value = '';
        msgBox.value = '';
        telInput.value = '';
        subject.value = '';
        imageRemove.onclick = function(){
            userList.removeChild(li);
            userList.removeChild(sub1);
            userList.removeChild(sub2);
            userList.removeChild(imageRemove);
          };
        msg.innerHTML = '';
    }
}

