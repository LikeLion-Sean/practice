const partyGuest = { // 속성, 메서드들의 집합체 = 객체
    name: 'Birthday Party',
    guestList: ['Sean', 'Taehoon', 'Hyeon woo'], // 배열
    printGuestList(){
        console.log('Guest list for' + this.name)

        this.guestList.forEach((x) => { // 배열 함수
            console.log(x + ' is attending ' + this.name)
            // Sean
            // Taehoon
            // Hyeon woo;
        })
    }
};

// const classList = {
//     name: ['SungRak', 'JongRak', 'Wally cho','Ji Hye', 'Sae hoon', 'Hye Yeon'],
//     callName(){
//         this.name.forEach((x) => {
//             console.log('안녕하세요 저희 수강생은 ' + x + ' 입니다');
//         })
//     }
// };
// classList.callName()

// console.log(안녕하세요 저희 수강생은 name 입니다.)

const plus = ['헤이','나는','개발자','코딩은','재밌어']; // element

plus.map((ele) => {
    console.log(ele);
    
});

// map(ele,index,array)

// sdfjkhljksdfljkdlskfjadklsjfadklsjfladjskf
function multie(){
    
}