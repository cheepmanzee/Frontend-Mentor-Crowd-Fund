const $bookmark = document.getElementById('bookmark');
const $bookmarkP = document.querySelector('#bookmark p');
const $reward = document.querySelectorAll('.reward__item');
const $amount = document.querySelectorAll('.reward__select p');
const $burger = document.getElementById('burger');
const $dropdown = document.querySelector('.burger__dropdown');
const $nav = document.querySelector('.nav');
const $backBtn = document.getElementById('back-btn');
const $modalBack = document.querySelector('.modal-back');
const $modalClose = document.querySelector('.modal-close');
const $selectItems = document.querySelectorAll('.select__item');
const $rewardBtn = document.querySelectorAll('.reward__select a');
const $expandedBtn = document.querySelectorAll('.item__expand a');
const $modalFin = document.querySelector('.modal-fin');
const $finBtn = document.querySelector('.modal-fin__wrapper a');

$bookmark.addEventListener('click', function(){
    $bookmark.classList.toggle('bookmarked');
    if ($bookmark.classList.contains('bookmarked')){
        $bookmarkP.textContent = 'Bookmarked';
        $bookmarkP.style.color = '#157A74';               
    } else {
        $bookmarkP.textContent = 'Bookmark';
        $bookmarkP.style.color = 'inherit';
    }
})

$burger.addEventListener('click', function(){
    if ($dropdown.classList.contains('active')) {
        $dropdown.classList.remove('active');
        $dropdown.style.left = '150%';
        $burger.classList.remove('burger-collapse');
        

    } else {
        $dropdown.classList.add('active');
        $dropdown.style.left = '50%';
        $burger.classList.add('burger-collapse');
    }
})

$modalClose.addEventListener('click',function(){
    $modalBack.classList.remove('active')
})

for (let a of $rewardBtn) {
    a.addEventListener('click',function(){
        $modalBack.classList.add('active');
        if ($dropdown.classList.contains('active')) {
            $dropdown.classList.remove('active');
            $burger.classList.remove('burger-collapse');
        }
    })
}

$backBtn.addEventListener('click', function(){
    $modalBack.classList.add('active');
    if ($dropdown.classList.contains('active')) {
        $dropdown.classList.remove('active');
        $burger.classList.remove('burger-collapse');
    }
})

for (let item of $selectItems){
    item.addEventListener('click',function(){
        if (item.classList.contains('expand')) {
            item.classList.remove('expand')
            for (el of $selectItems) {
                el.classList.remove('expand')
            }
        }
        item.classList.add('expand')
    })
}

for (let a of $expandedBtn) {
    a.addEventListener('click',function(){
        $modalBack.classList.remove('active');
        $modalFin.classList.add('active');
    })
}

$finBtn.addEventListener('click', function(){
    $modalFin.classList.remove('active');
})
















