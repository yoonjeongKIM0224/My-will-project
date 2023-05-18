/* 탭메뉴 */
const CONTROLS_ATTR = 'aria-controls';
const SELECTED_ATTR = 'aria-selected';

const tabList = document.querySelectorAll('[role="tablist"]'); //tabList 갖고 오기
tabList.forEach(tabHandler);

function tabHandler(tabListElem){
    // console.log(tabListElem)
    const tabBtn = tabListElem.querySelectorAll('[role="tab"]');

    const tabContParent = tabListElem.dataset.tabname; //해당 탭 버튼의 [data-tabName]
    const tabConts = document.querySelectorAll(`[data-tabParent="${tabContParent}"]`); //[data-tabName]에 해당하는 콘텐츠들 찾기

    tabBtn.forEach(function(item){ //탭 버튼들을
        item.addEventListener('click', function(){ //클릭했을 경우
            
            if(item.getAttribute(SELECTED_ATTR) === 'false') { //탭 버튼이 비활성화일 때만
                let itemControls = item.getAttribute(CONTROLS_ATTR); // aria-controls
                let itemCont = document.querySelector(`#${itemControls}`); //aria-controls와 id가 같은 콘텐츠 찾음

                tabBtn.forEach(function(item){ //탭 버튼들에게
                    item.setAttribute(SELECTED_ATTR, 'false'); //aria-controls값 변경
                    
                    tabConts.forEach(function(item){
                        item.classList.remove('on');
                    });
                });

                item.setAttribute(SELECTED_ATTR, 'true'); //aria-controls값 변경
                itemCont.classList.add('on');
            }
        });
    });
}