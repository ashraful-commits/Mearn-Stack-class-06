

// - Create a Student Array Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  now create a console data table with
// - Total Admnission fees


/* 
const sutdents=[
    ['MD Shahab','1','13','six','male','uttara','1000'],
    ['Abdur Razzak','1','14','seven','male','uttara','2000'],
    ['Emran Hasan','1','15','eight','male','uttara','3000'],
    ['Istiak Robin','1','16','nine','male','uttara','4000'],
    ['Md Raza','1','17','ten','male','uttara','1000'],
    ['Apu Barua','2','13','six','male','mirpur','1000'],
    ['Md Mahbubur Rahman','2','14','seven','male','mirpur','2000'],
    ['MD. Faisal Kabir','2','15','eight','male','mirpur','3000'],
    ['MD.REJOYAN ISLAMb','2','16','nine','male','mirpur','4000'],
    ['Md Rubel Hasan','2','17','ten','male','mirpur','5000'],
    ['Somaiya Alam Asha','3','13','six','female','badda','1000'],
    ['Saddam','3','14','seven','male','badda','2000'],
    ['MD Nazrul Islam Nahid','3','15','eight','male','badda','3000'],
    ['RABIUL JAHID','3','16','nine','male','badda','4000'],
    ['Hammad Sadi','3','17','ten','male','badda','5000'],
    ['Md Zoynul Abedin','4','13','six','male','uttara','1000'],
    ['Md Sajib Shikder','4','14','seven','male','uttara','2000'],
    ['S.M Zahid Hasan','4','15','eight','male','uttara','3000'],
    ['Jibon Chandra Roy','4','16','nine','male','uttara','4000'],
    ['Md. Anisul Hoque','4','17','ten','male','uttara','5000'],
    ['Muhammad Nazmul Huda','5','13','six','male','mirpur','1000'],
    ['Md. Akramul Islam','5','14','seven','male','mirpur','2000'],
    ['MD SHAHINUR ISLAM','5','15','eight','male','mirpur','3000'],
    ['Md Akash Shikder','5','16','nine','male','mirpur','4000'],
    ['Tahir Hossain Nihal','5','17','ten','male','mirpur','5000'],
    ['RP SOHAG','6','13','six','male','uttara','1000'],
    ['Md Habib','6','14','seven','male','uttara','2000'],
    ['Sufia Akter','6','15','eight','female','uttara','3000'],
    ['M.A. Wadud Ahammed','6','16','nine','male','uttara','4000'],
    ['Md.Jamadul','6','13','ten','male','uttara','5000']
]



let total_fee =0;
sutdents.map((data)=>{

total_fee += Number(data[6])
})

console.log(`
total fee = ${total_fee};
`) */



// - Find All Female Students
/* 
sutdents.sort().forEach((data,index)=>{
    if(data[4]==='female'){
        console.log(data[0]);
    }
}) */







// - Find class wise student result

/*const sutdents=[
    ['MD Shahab','1','13','six','male','uttara','4'],
    ['Abdur Razzak','1','14','seven','male','uttara','5'],
    ['Emran Hasan','1','15','eight','male','uttara','3.5'],
    ['Istiak Robin','1','16','nine','male','uttara','4'],
    ['Md Raza','1','17','ten','male','uttara','4'],
     ['Apu Barua','2','13','six','male','mirpur','4'],
    ['Md Mahbubur Rahman','2','14','seven','male','mirpur','5'],
    ['MD. Faisal Kabir','2','15','eight','male','mirpur','3.5'],
    ['MD.REJOYAN ISLAMb','2','16','nine','male','mirpur','4'],
    ['Md Rubel Hasan','2','17','ten','male','mirpur','5'],
    ['Somaiya Alam Asha','3','13','six','female','badda','4'],
    ['Saddam','3','14','seven','male','badda','5'],
    ['MD Nazrul Islam Nahid','3','15','eight','male','badda','3.5'],
    ['RABIUL JAHID','3','16','nine','male','badda','4'],
    ['Hammad Sadi','3','17','ten','male','badda','5'],
    ['Md Zoynul Abedin','4','13','six','male','uttara','4'],
    ['Md Sajib Shikder','4','14','seven','male','uttara','5'],
    ['S.M Zahid Hasan','4','15','eight','male','uttara','3.5'],
    ['Jibon Chandra Roy','4','16','nine','male','uttara','4'],
    ['Md. Anisul Hoque','4','17','ten','male','uttara','5'],
    ['Muhammad Nazmul Huda','5','13','six','male','mirpur','4'],
    ['Md. Akramul Islam','5','14','seven','male','mirpur','5'],
    ['MD SHAHINUR ISLAM','5','15','eight','male','mirpur','3.5'],
    ['Md Akash Shikder','5','16','nine','male','mirpur','4'],
    ['Tahir Hossain Nihal','5','17','ten','male','mirpur','5'],
    ['RP SOHAG','6','13','six','male','uttara','4'],
    ['Md Habib','6','14','seven','male','uttara','2'],
    ['Sufia Akter','6','15','eight','female','uttara','3.5'],
    ['M.A. Wadud Ahammed','6','16','nine','male','uttara','4'],
    ['Md.Jamadul','6','13','ten','male','uttara','5']
]



sutdents.sort().map((data,index)=>{
    if(data[3]==='six'){
        console.log(`Name: ${data[0]}       Class: ${data[3]}           GPA: ${data[6]}`);
    }
})
 */






// - Location wise student result

/* sutdents.sort().map((data,index)=>{
    if(data[5]==='uttara'){
        console.log(`Name: ${data[0]}       Location: ${data[5]}           GPA: ${data[6]}`);
    }
}) */





// - find student between 10 - 25 age

/* sutdents.sort().map((data,index)=>{
    if(data[2]>='10' && data[2]<='25'){
        console.log(`Name: ${data[0]}       Age: ${data[2]}           GPA: ${data[6]}`);
    }
}) */










// let total_fee = 0;

/* 
const sutdents=[
    ['MD Shahab','1','13','six','male','uttara','1000'],
    ['Abdur Razzak','1','14','seven','male','uttara','2000'],
    ['Emran Hasan','1','15','eight','male','uttara','3000'],
    ['Istiak Robin','1','16','nine','male','uttara','4000'],
    ['Md Raza','1','17','ten','male','uttara','1000'],
    ['Apu Barua','2','13','six','male','mirpur','1000'],
    ['Md Mahbubur Rahman','2','14','seven','male','mirpur','2000'],
    ['MD. Faisal Kabir','2','15','eight','male','mirpur','3000'],
    ['MD.REJOYAN ISLAMb','2','16','nine','male','mirpur','4000'],
    ['Md Rubel Hasan','2','17','ten','male','mirpur','5000'],
    ['Somaiya Alam Asha','3','13','six','female','badda','1000'],
    ['Saddam','3','14','seven','male','badda','2000'],
    ['MD Nazrul Islam Nahid','3','15','eight','male','badda','3000'],
    ['RABIUL JAHID','3','16','nine','male','badda','4000'],
    ['Hammad Sadi','3','17','ten','male','badda','5000'],
    ['Md Zoynul Abedin','4','13','six','male','uttara','1000'],
    ['Md Sajib Shikder','4','14','seven','male','uttara','2000'],
    ['S.M Zahid Hasan','4','15','eight','male','uttara','3000'],
    ['Jibon Chandra Roy','4','16','nine','male','uttara','4000'],
    ['Md. Anisul Hoque','4','17','ten','male','uttara','5000'],
    ['Muhammad Nazmul Huda','5','13','six','male','mirpur','1000'],
    ['Md. Akramul Islam','5','14','seven','male','mirpur','2000'],
    ['MD SHAHINUR ISLAM','5','15','eight','male','mirpur','3000'],
    ['Md Akash Shikder','5','16','nine','male','mirpur','4000'],
    ['Tahir Hossain Nihal','5','17','ten','male','mirpur','5000'],
    ['RP SOHAG','6','13','six','male','uttara','1000'],
    ['Md Habib','6','14','seven','male','uttara','2000'],
    ['Sufia Akter','6','15','eight','female','uttara','3000'],
    ['M.A. Wadud Ahammed','6','16','nine','male','uttara','4000'],
    ['Md.Jamadul','6','13','ten','male','uttara','5000']
]
let total_fee = 0;
sutdents.sort().map((data,index)=>{
   total_fee += Number(data[6])
})

console.log(total_fee);

 */