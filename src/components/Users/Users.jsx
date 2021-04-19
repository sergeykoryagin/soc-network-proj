import React from "react";
import s from './Users.module.css'
import userPhoto from './../../images/photos/user.png'
import Loader from "../common/Loader";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map((p) => {
                        return <span key={p} className={props.currentPage === p ? s.currentPage : ""}
                                     onClick={() => props.onPageChanged(p)}>{p}&nbsp;</span>
                    })
                }
            </div>
            {props.isFetching ? <Loader/> : null}
            {
                props.users.map((u) => {
                    return (
                        <div key={u.id}>
                            <div>
                                <img className={s.userPhoto} src={u.userPhoto ? u.userPhoto : userPhoto}
                                     alt={"userPhoto"}/>
                                {u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}>unfollow</button> :
                                    <button onClick={() => props.follow(u.id)}>follow</button>}
                            </div>
                            <div>
                                <span>{u.name}</span>
                                <p>{u.status}</p>
                                <span>{"u.city"}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users