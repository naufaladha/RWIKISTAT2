import dynamic from "next/dynamic";
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Ace = dynamic(() => import("../components/Editor"), { ssr: false });
const AceShiny = dynamic(() => import("../components/EditorShiny"), { ssr: false });
const Modules = () => {
  return (
    <>
   <Head>
    <title>Rwikistat-Modules</title>
   </Head>
   <Navbar />
    <div className="flex flex-col">
      <div className="flex-col pt-10 ">
        <h1 className="bg-gray-200 border-l-8 border-green-700 text-[30px]"> 9.1 Regresi Linear Sederhana</h1>
        <div className="ml-3 flex bg-white flex-col">
          
        <h2 className="font-bold">Tujuan : </h2>
<div>
Mahasiswa mampu menganalisa relasi antara dua peubah melalui metode statistika dskriptif
yaitu yaitu scatter plot, selanjutnya adalah mampu melakukan mendapatkan, menguji, dan
menganalisa korelasi antar dua peubah tersebut. Setelah kedua hal tersebut dipahami,
selanjutnya adalah mahasiswa mampu mendapatkan, menguji, dan menganalisa model
hubungan antara dua peubah menggunakan metode regresi linear sederhana.
<br />
<br />
<h2 className="font-bold">9.1 Dasar Teori</h2>
9.1.2 shiny
Scatter plot adalah satu metode statistika deskriptif untuk melihat hubungan antara dua
peubah yang digambarkan sebagai titik-titik dalam koordinat kartesian. Pada scatter plot
yang perlu diperhatikan adalah pola hubungan kedua peubah, apakah membentuk suatu pola
tertentu atau tanpa pola sedikitpun.
Dalam R, untuk membuat scatter plot bisa menggunakan sintaks “plot(x,y)”. Jika ingin
menambahkan sebuah garis yang mungkin memberikan gambaran tentang korelasi
(hubungan) antara x dan y, maka bisa menggunakan sintaks “scatter.smooth(x,y)”.
<br />
<br />
Contoh:
Ingin diketahui hubungan antara tinggi badan dan berat badan 34 mahasiswa.  
Data diberikan
sebagai berikut:
<br />  
Tinggi banda (TB) = 171, 173, 160, 173, 162, 173, 173, 173, 162, 173, 161, 171,
175, 167, 175, 167, 155, 160, 165, 169, 151, 153, 150, 163,
161, 159, 159, 150, 151, 160, 153, 153, 152, 155
<br />
Berat badan (BB) = 65, 53, 50, 49, 50, 63, 68, 54, 52, 55, 49, 60, 65, 52, 65, 49, 40,
57, 55, 63, 32, 45, 45, 45, 67, 42, 59, 38, 43, 50, 54, 49, 42, 45
<br />
Membuat scatter plot:
<br />
<br />
  plot(TB,BB)
<br />
<br />
Hasil gambar akan keluar dalam jendela (window) yang berbeda.
Gambar scatter plot akan nampak seperti gambar pada kolom output dibawah ini.</div>
        </div>
      </div>
    </div>
      <Ace />
      <div className="flex flex-col">
      <div className="flex-col pt-10 ">
        <h1 className="bg-gray-200 border-l-8 border-green-700 text-[30px]"> 9.1 Regresi Linear Sederhana</h1>
        <div className="ml-3 flex bg-white flex-col">
          
        <h2 className="font-bold">Tujuan : </h2>
<div>
Mahasiswa mampu menganalisa relasi antara dua peubah melalui metode statistika dskriptif
yaitu yaitu scatter plot, selanjutnya adalah mampu melakukan mendapatkan, menguji, dan
menganalisa korelasi antar dua peubah tersebut. Setelah kedua hal tersebut dipahami,
selanjutnya adalah mahasiswa mampu mendapatkan, menguji, dan menganalisa model
hubungan antara dua peubah menggunakan metode regresi linear sederhana.
<br />
<br />
<h2 className="font-bold">9.2 Shiny</h2>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate pariatur repellat, laborum suscipit aut odio, laboriosam iste eaque quae, excepturi molestias omnis? Voluptatem inventore corporis qui repellat velit necessitatibus vel.
Hasil gambar akan keluar dalam jendela (window) yang berbeda.
Gambar scatter plot akan nampak seperti gambar pada kolom output dibawah ini.</div>
        </div>
      </div>
    </div>
      <AceShiny />
    </>
    
  );
};

export default Modules;