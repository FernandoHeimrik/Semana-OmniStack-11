import React from 'react';

// export default function Header(props) {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     );
// }

export default function Header({ children }) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}
