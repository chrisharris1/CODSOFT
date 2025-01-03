let memory = 0; 

function Solve(val) {
   const v = document.getElementById("res");
   const lastChar = v.value.slice(-1);

   if (["+","-","*","/","%"].includes(lastChar) && ["+","-","*","/","%"].includes(val)) {
      return;
   }

   v.value += val;
}


function Result() {
   const input = document.getElementById("res").value;

   try {
      if (input.includes('/0')) {
         throw new Error("Division by zero");
      }

      const result = eval(input.replace('x', '*'));
      document.getElementById("res").value = result;
   } catch {
      document.getElementById("res").value = "Error";
   }
}


function Clear() {
   const inp = document.getElementById("res");
   inp.value = "";
}


function Back() {
   const ev = document.getElementById("res");
   ev.value = ev.value.slice(0, -1);
}


function MemoryAdd() {
   const value = parseFloat(document.getElementById("res").value);
   if (!isNaN(value)) {
      memory += value;
   }
}

function MemoryRecall() {
   document.getElementById("res").value = memory;
}

function MemoryClear() {
   memory = 0;
}


document.querySelectorAll("input[type='button']").forEach((button) => {
   button.addEventListener("mousedown", () => {
      button.style.transform = "scale(0.95)";
   });
   button.addEventListener("mouseup", () => {
      button.style.transform = "scale(1)";
   });
});


document.addEventListener("keydown", function (event) {
   const key = event.key;
   const validKeys = "0123456789+-*/.%";
   if (validKeys.includes(key)) {
      Solve(key === "*" ? "x" : key);
   } else if (key === "Enter") {
      Result();
   } else if (key === "Backspace") {
      Back();
   } else if (key.toLowerCase() === "c") {
      Clear();
   }
});
