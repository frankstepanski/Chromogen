<<<<<<< HEAD

// /* eslint-disable */
// import React, { useState } from 'react';
// import { hooksLedger as ledger } from '../utils/hooks-ledger';
// import { renderHook } from '@testing-library/react-hooks'
// /* eslint-enable */

// //transaction = how many times setState cb has fired

// //Testing logic for user's state
// //testing for edge cases in the user's app

// /* ----- HELPER FUNCTIONS ----- */

// /* ----- SETUP FUNCTIONS ----- */
// /*
// // Create setup functions like importRecoilState,importRecoilFamily, etc for hooks 

// // set up functions to import user's useState and variables related to it: state variable (array), setState callback function 
//     // use regex to return outcomes
// */

// //import hooks initial state from user's app
// export function importHooksInitialState(initialStateArray: any[]) {
//   return initialStateArray.reduce(
//     (fullStr: any, initState: any) => `${fullStr}\t${initState},\n`,
//     '' );
// }

// //import hooks callback from user's app
// export function importHooksCallback(setStateCb: any[]) {
//   return setStateCb.reduce((fullStr: any, cb: any) => `${fullStr}\t${cb},\n`, '')
// }

// //DO WE NEED THIS??
// //import state after initial invokation of setState callback
// // export function importHooksUpdatedState(currStateArray) {
// //   return currStateArray.reduce(
// //     (fullStr, currState) =>
// //       `${fullStr}\tconst [${currState}Value, cb${currState}] = useState(${currState});\n`,
// //     '',
// //   );
// // }

// //writeableHook = cb of useState
// //readableHook = state of useState 

// //import writeable hook from user's app; MIGHT NOT NEED
// export function writeableHook() {
//   // will be function
// }

// //import readable hook from user's app; MIGHT NOT NEED
// export function readableHook() {
//   // will be function
// }

// /* ----- INITIAL RENDER ----- */
// // PROB SHOULD TRACK INITIAL RENDER AND THAT IT EXISTS
// // initialize hooks state

// /* ----- SETSTATE CB TEST ----- */
// /*
// Recreate hooks version of testSetters in output-utils.ts 
//     //test for variable user passes into setState of useState and make sure state is updating 

// */

// const ledgerCurrState = ledger.currState[0];
// const ledgerSetStateCallback = ledger.setStateCallback[0];
// const ledgerInitialState = ledger.initialState[0];
// const ledgerPrevState = ledger.prevState[0];


// export function testHooksSetState(useStateCallbackArray: any[]) {
//   return useStateCallbackArray.reduce((callbackTests: any, { ledgerCurrState, ledgerSetStateCallback}: any) => {
//     //CREATE TEST HERE

//     //if initial state exists
//     if (Transactions[initialState]) {
//       const { params } = useStateCb;

//       let scrubbedParams;
//       //stringify params to make sure there are no special characters or empty spaces
//       if (typeof params === 'string') {
//         scrubbedParams = params.replace(/[^\w\s]/gi, '');
//       }

//       return params !== undefined
//        ? `${callbackTests}\tit('${useStateCb[transactions.currState]}__${
//          scrubbedParams !== undefined ? scrubbedParams : JSON.stringify(params)
//        } should properly update State', () => {
//          \t\tconst { result } = renderHook(() => Transaction[setStateCallback][0]()); 

//         \t\t`
//        } 
//        return callbackTests;
//       }, '');
//     }
//     //if exists, check whether setState cb exists
//     //if setState cb exists
//     //check whether there is a previous state value in transactions.state

//     //if initial state doesn't exist
//     //throw error message
//     //-----------------------------------------------
//     //if state has been set
//     // check whether another setState cb has been fired && transactions[state] exists in ledger
//     //if fired, check whether state has changed

//     //if state has not been set
//     // check whether setState cb exists
//     //if setState cb exists
//     // check whether setState cb has been fired
//     // if fired
//     //check whether hook state in ledger has been updated

// // add to ledgers and types: state, initialState, previous state

// export function testSetters(setTransactionArray: SetTransaction[]): string {
//   return setTransactionArray.reduce((setterTests, { state, setter }) => {
//     const updatedAtoms = state.filter(({ updated }) => updated);
//     if (setter) {
//       const { params } = setter;

//       let scrubbedParams;
//       if (typeof params === 'string') {
//         scrubbedParams = params.replace(/[^\w\s]/gi, '');
//       }

//       return params !== undefined
//         ? `${setterTests}\tit('${setter.key}__${
//             scrubbedParams !== undefined ? scrubbedParams : JSON.stringify(params)
//           } should properly set state', () => {
//           \t\tconst { result } = renderRecoilHook(useStoreHook);
          
//           \t\tact(() => {
//           ${initializeAtoms(state, false)}\t\t});
          
//           \t\tact(() => { 
//           \t\t\tresult.current.set${setter.key}__${
//             scrubbedParams !== undefined ? scrubbedParams : JSON.stringify(params)
//           }(${JSON.stringify(setter.newValue)});
//           \t\t});
          
//           ${assertState(updatedAtoms)}\t});\n\n`
//         : `${setterTests}\tit('${setter.key} should properly set state', () => {
//             \t\tconst { result } = renderRecoilHook(useStoreHook);
            
//             \t\tact(() => {
//             ${initializeAtoms(state, false)}\t\t});
            
//             \t\tact(() => { 
//             \t\t\tresult.current.set${setter.key}(${JSON.stringify(setter.newValue)});
//             \t\t});
            
//             ${assertState(updatedAtoms)}\t});\n\n`;
//     } else return setterTests;
//   }, '');
// }

=======
/* eslint-disable */
// import React, { useState } from 'react';
import { hooksLedger as ledger } from '../utils/hooks-ledger';
// import { renderHook } from '@testing-library/react-hooks'
/* eslint-enable */

//transaction = how many times setState cb has fired

//Testing logic for user's state
//testing for edge cases in the user's app

/* ----- HELPER FUNCTIONS ----- */

/* ----- SETUP FUNCTIONS ----- */
/*
// set up functions to import user's useState and variables related to it: state variable (array), setState callback function & use regex to return outcomes
*/

//import hooks state from user's app
export function importHooksInitialState(stateArray: any[]) {
  return stateArray.reduce(
    (fullStr: any, hooksState: any) => `${fullStr}\t${hooksState},\n`,
    '' );
}

//import hooks callback from user's app
export function importHooksCallback(setStateCb: any[]) {
  return setStateCb.reduce((fullStr: any, cb: any) => `${fullStr}\t${cb},\n`, '')
}

//DO WE NEED THIS??
//import state after initial invokation of setState callback
// export function importHooksUpdatedState(currStateArray) {
//   return currStateArray.reduce(
//     (fullStr, currState) =>
//       `${fullStr}\tconst [${currState}Value, cb${currState}] = useState(${currState});\n`,
//     '',
//   );
// }

//writeableHook = cb of useState
//readableHook = state of useState 

//import writeable hook from user's app; MIGHT NOT NEED
export function writeableHook() {
  // will be function
}

//import readable hook from user's app; MIGHT NOT NEED
export function readableHook() {
  // will be function
}

/* ----- INITIAL RENDER ----- */
// PROB SHOULD TRACK INITIAL RENDER AND THAT IT EXISTS
// initialize hooks state

/* ----- SETSTATE CB TEST ----- */
/*
Recreate hooks version of testSetters in output-utils.ts 
    //test for variable user passes into setState of useState and make sure state is updating 

*/

export const ledgerCurrState = ledger.currState[0];
export const ledgerSetStateCallback = ledger.setStateCallback[0];
export const ledgerInitialState = ledger.initialState[0];
export const ledgerPrevState = ledger.prevState[0];


export function testHooksSetState(useStateCallbackArray: any[] ) {
  return useStateCallbackArray.reduce((callbackTests: any,  ledgerSetStateCallback: any) => {
    //CREATE TEST HERE

    //if initial state exists
    if (ledgerInitialState) {
      const { params } = ledgerSetStateCallback;

      let scrubbedParams;
      //stringify params to make sure there are no special characters or empty spaces
      if (typeof params === 'string') {
        scrubbedParams = params.replace(/[^\w\s]/gi, '');
      }

      return params !== undefined
       ? `${callbackTests}\tit('${ledgerCurrState}__${
         scrubbedParams !== undefined ? scrubbedParams : JSON.stringify(params)
         } should properly update State', () => {
         \t\tconst { result } = renderHook(() => ledgerSetStateCallback()); 

        \t\tact(() => { 
          \t\t\tresult.current.state${ledgerCurrState}__${
              scrubbedParams !== undefined ? scrubbedParams : JSON.stringify(params)
            }(${JSON.stringify(ledgerSetStateCallback.newValue)});
          \t\t});`
       } 
       return callbackTests;
      }, '');
    }
    //if exists, check whether setState cb exists
    //if setState cb exists
    //check whether there is a previous state value in transactions.state

    //if initial state doesn't exist
    //throw error message
    //-----------------------------------------------
    //if state has been set
    // check whether another setState cb has been fired && transactions[state] exists in ledger
    //if fired, check whether state has changed

    //if state has not been set
    // check whether setState cb exists
    //if setState cb exists
    // check whether setState cb has been fired
    // if fired
    //check whether hook state in ledger has been updated
>>>>>>> 52d4ade081a072442189ebd70be19cdc3070bf88
