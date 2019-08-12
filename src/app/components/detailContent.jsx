import React from 'react';
import Lists from './lists.jsx';
// import SpanCustom from '../span.jsx';
import ListsStory from './listsStory';
import ListsSuggestions from './listsSuggestions';

const DetailContent = ({props_list,result,props_page_main, currentpage, purpose}) => {

    let resultZ = result;
    let json_filter = resultZ.filter(e => e.userName.toLowerCase().includes(props_list));

    // let arrayNumber = [1,2,3,4,5,6,7,8,9];
    
    // console.log("type of "+ typeof(currentpage))
    console.log({purpose})
    if (purpose === "list" ){
        return (
            <div>
                <div className="Content2">
                    <Lists
                        maping={json_filter} 
                    />
                </div>
                {/* <div className="pagination">
                    {arrayNumber.map((angka) =>
                        <SpanCustom
                            props_page={(e) =>  props_page_main(angka)}
                            value={angka}
                            classnm={angka === currentpage ? "active" : ""}
                        ></SpanCustom>
                        
                    )}
                </div> */}
            </div>

        )
    } else if (purpose === "story") {
        return (
            <div><ListsStory /></div>
        )
    } else if (purpose === "suggestion") {
        return (
            <div><ListsSuggestions /></div>
        )
    }
}

export default DetailContent;