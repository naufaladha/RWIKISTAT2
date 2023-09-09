import dynamic from "next/dynamic";
import React from "react";
import Head from "next/head";
import Navbar2 from "../components/Navbar2";
import Image from "next/image";
import image1_1 from "../Assets/bab_1_modules/image1_1.jpg"
import image2_1 from "../Assets/bab_1_modules/image2_1.jpg"
import image3_1 from "../Assets/bab_1_modules/image3_1.jpg"
import eclipse from "../Assets/eclipse.png";
import eclipse2 from "../Assets/eclipse2.png";
// import PdfViewer from '../components/PdfViewer';

const Ace1_1 = dynamic(() => import("../components/Editor1_1"), { ssr: false });
const AceShiny1_1 = dynamic(() => import("../components/EditorShiny1_1"), { ssr: false });
const Modules = () => {
  return (
    <>
   <Head>
    <title>Rwikistat-Modules</title>
   </Head>
<Navbar2 />
  <div className="flex flex-col">
    <div className="flex-col pt-10 pl-[50px] pr-[50px] items-center">
        <div className="bg-[#2D7353] drop-shadow-xl text-[22px] text-center pl-4 pr-3 rounded-xl text-white">
          <h1 className="text-[40px]">BAB I</h1>
          <h1 className="text-[40px]">PENGENALAN R DAN R STUDIO</h1>
          <h2 className="font-bold pt-2">Capaian Pembelajaran : </h2>
          <ul className="list-disc text-justify pl-3 pb-3">
            <li>Mahasiswa mampu mengenal perangkat lunak statistika open source R dan R-Studio</li>
            <li>Mahasiswa mengetahui istilah- istilah dasar dalam komputasi statistika</li>
            <li>Mahasiswa dapat mengoperasikan perangkat lunak statistika open source R dan R- Studio menggunakan dasar-dasar algoritma komputasi untuk memformulasikan penyelesaian masalah</li>
            <li>Mahasiswa mampu menjelaskan konsep teoritis dan prinsip-prinsip pokok statistika dengan benar dan baik</li>
         </ul>
        </div>
    <div className="ml-3 flex bg-white flex-col items-center">  
      <div className="pt-2 pl-3">
      <br />
        <div className="pl-[30px] text-[18px]">
          <h2 className="bg-gray-200 border-l-8 border-[#2d7353ac] font-bold pt-3 pb-3 pl-2 text-[21px]">1.1 Perangkat Lunak R dan R-Studio</h2>
            <div className="pl-3 pb-6 pt-3">
              <p className="text-justify pl-4 indent-first-line">
                  Seiring perkembangan kemampuan komputasi dan perangkat lunak, analisis data eksplorasi telah berkembang jauh melampaui ruang lingkup aslinya. Penggerak utama dari disiplin ini mengikuti pesatnya perkembangan teknologi baru, akses kepada data yang lebih besar, dan penggunaan analisis kuantitatif yang lebih besar dalam berbagai disiplin ilmu.
                </p>
                <p className="text-justify pl-4 indent-first-line">
                  Bahasa R merupakan bahasa pemograman dan perangkat lunak untuk analisis statistik (juga dikenal sebagai GNU S). R adalah suatu sistem untuk analisis data yang termasuk kelompok software statistik open source yang tidak memerlukan lisensi atau gratis, yang dikenal dengan freeware. Sampai saat ini, R sangat populer di kalangan pengguna statistika di Indonesia untuk keperluan analisis data. R mirip dengan bahasa S, yang diperluas dan dikembangkan pada 1980-an di AT&T Bell Labs (sekarang Alcatel-Lucent) (J Horton and Kleinman, 2015).
                </p>
                <p className="text-justify pl-4 indent-first-line">
                  R adalah program komputer statistik yang tersedia melalui Internet di bawah Lisensi Publik Umum (GPL). Artinya, itu dilengkapi dengan lisensi yang memungkinkan Anda menggunakannya secara bebas, mendistribusikannya, atau bahkan menjualnya, selama penerima memiliki hak yang sama dan kode sumber tersedia secara bebas (Dalgaard, 2008).
                </p>
                <br/>
                <p>Kelebihan dari R: 
                </p>
                <ul className="list-decimal pl-7">
                  <li>Efektif dalam pengelolaan data dan fasilitas penyimpanan. Ukuran file yang disimpan jauh lebih kecil dibanding software lainnya.</li>
                  <li>lengkap dalam operator perhitungan array,</li>
                  <li>Lengkap dan terdiri dari koleksi tools statistik yang terintegrasi untuk analisis data, diantaranya, mulai statistik deskriptif, fungsi probabilitas, berbagai macam uji statistik, hingga time series</li>
                  <li>Tampilan grafik yang menarik dan fleksibel ataupun costumized</li>
                  <li>Dapat dikembangkan sesuai keperluan dan kebutuhan dan sifatnya yang terbuka, setiap orang dapat menambahkan fitur-fitur tambahan dalam bentuk paket ke dalam software R</li>
                  <li>R bersifat multiplatform, yakni dapat diinstall dan digunakan baik pada system operasi Windows, UNIX/LINUX maupun pada Macintosh. Untuk dua system operasi disebeutkan terakhir diperlukan sedikit penyesuaian.</li>
                </ul>
                <br />
                <p className="text-justify pl-4 indent-first-line">
                  Sampai saat ini software R dikembangkan oleh semua penggunanya yang terhimpun dalam naungan R core team yang merupakan pekerja keras dan sukarelawan (voulentir). R merupakan sebuah lingkungan interaktif untuk komputasi secara statistik dan grafik-grafik, R dapat di download pada https://cran.r-project.org/. Gambar 1 menunjukkan tampilan jendela pada software R.
                </p>

                <Image className="flex mx-auto relative" src={image1_1} alt="image_1" width={800} height={800} />
                <h4 className="text-[16px] text-center">Gambar 1. Tampilan jendela pada software R.</h4>
                <br />
                <p className="text-justify pl-4 indent-first-line">
                  Dalam perkembangannya, R-Studio memungkinkan pengguna menjalankan R dengan lebih mudah, produk ini tersedia pada http://www.rstudio.com/. R-Studio hanya bisa diinstall jika pengguna sudah memiliki software R didalamnya. R-Studio memiliki empat jendela dalam satu frame, hal ini memudahkan pengguna dalam melihat tampilan output yang dihasilkan.
                </p>
                <br />
                <Image className="flex mx-auto relative" src={image2_1} alt="image_1" width={1000} height={1000} />
                <h4 className="text-[16px] text-center">Gambar 2. Tampilan jendela pada software R-Studio</h4>
                <p className="text-justify pl-4 indent-first-line">
                  Dengan data yang besar, akan sangat sulit untuk mengentry ulang data yang dimiliki jika ingin menggunakan program yang berbeda. Copy data secara manual juga memakan banyak waktu dan energi, selain itu kesalahan sangat mungkin terjadi. Untuk memudahkan mengolah data, ada beberapa cara import data dari Excel ke R, salah satunya adalah dengan mengubah format excel (*.xls, *.xlsx) ke dalam format .csv (misalnya read.csv).
                </p>
                <p className="text-justify pl-4 indent-first-line">
                  R-Studio menyediakan fitur "project" yang sangat berguna yang memungkinkan pengguna beralih dengan cepat antar proyek. Setiap proyek mungkin memiliki direktori kerja, ruang kerja, dan kumpulan file di komponen source. Nama proyek saat ini terdaftar di paling kanan dari main application toolbar pada combobox yang memungkinkan seseorang untuk beralih antara membuka proyek, membuka proyek yang sudah ada, atau membuat proyek baru. Proyek baru hanya membutuhkan nama dan direktori kerja. Fitur ini sangat sesuai untuk RStudio, karena ketika dijalankan sebagai aplikasi web, ada kebutuhan untuk membuat serialize dan pulihkan sesi karena sifat koneksi web. Berpindah antar proyek semudah memilih proyek yang terbuka (Verzani, 2011).
                </p>
                <p className="text-justify pl-4 indent-first-line">
                  Kemampuan analisis R pada dasarnya didefinisikan dalam fungsi-fungsi yang dikemas dalam bentuk paket atau pustaka. Beberapa pustaka telah menjadi bagian dari paket R yang secara otomatis diinstal ketika kita menginstal R. Sebagian besar pustaka harus diinstal secara khusus sesuai kebutuhan dengan menuliskan library(). Beberapa pustaka juga telah diintegrasikan dalam pustaka RGUI R-Commander sehingga dapat diakses melalui menu, sedangkan sebagian besar sisanya harus diakses melalui CLI. Di samping itu, pengguna R masih mungkin mendefinisikan sendiri fungsi-fungsi R, baik dengan menggabungkan definisi yang telah ada, maupun mendefinisikan fungsi yang sama sekali baru.
                </p>
                <p className="text-justify pl-4 indent-first-line">
                  R bekerja secara mendasar dengan model tanya-jawab: memasukkan baris dengan perintah dan tekan Enter. Kemudian programnya melakukan sesuatu, mencetak hasilnya jika relevan, dan meminta lebih banyak masukan. Ketika R siap untuk input maka prompt akan dicetak, "&gt;" (Dalgaard, 2008).
                </p>
            </div>
          <h2 className="bg-gray-200 border-l-8 border-[#2d7343ac]  font-bold pt-3 pb-3 pl-2 text-[21px]">1.2.	Perintah Dasar dalam Pemograman R</h2> 
          <div className="pl-3 pb-6 pt-3">
            <p className="text-justify pl-4 indent-first-line">
            Perintah paling sederhana pada R adalah dengan memanfaatkan R sebagai kalkulator, contoh perintah yang dapat dilakukan adalah : 
            </p>
            <p className="pl-6">&gt; 50+60</p>
            <p className="pl-6">[1] 110</p>
            <p className="text-justify pt-3 pb-3">
            Dengan perintah tersebut, mesin dapat membaca kalkulator sederhana, bahwa 50+60 hasilnya adalah 110. [1] di depan hasil adalah bagian dari cara R mencetak angka dan vektor. Untuk hasil yang hanya memiliki satu angka, tidak terlalu terlihat kegunaannya, tetapi menjadi begitu berarti ketika hasilnya vector yang panjang. Angka dalam tanda kurung adalah indeks dari angka pertama itu garis. Pertimbangkan kasus menghasilkan 15 angka acak dari normal distribusi:
            </p>
            <p className="pl-6">&gt; rnorm(10)</p>
            <p className="pl-6">&gt; [1] -0.7888575	-0.1341562	-0.4567463	-3.0869651 0.6399005
            </p>
            <p className="pl-6">&gt; [6] 0.8964738	-0.1187127	-0.6530804	0.1392005 -0.4033104
            </p>
            <p className="pl-6 pt-2">Nilai 0.8964738 adalah hasil elemen ke[6]dari bentuk rnorm(10).
            </p>
            <p className="pl-4 indent-first-line pt-2">Selain sebagai kalkulator, bahasa R juga dapat memberikan penamaan (symbol) pada variabel seperti contoh berikut.
            </p>
            <p className="pl-6 pt-2">&gt; data = c(10,27,24,13,22,17,19,23,20,49)
            </p>
            <p className="pl-6 pt-2">Output yang diberikan pada penamaan data adalah membaca data dalam bentuk kolom dengan perintah c(). Jika kita memanggil data maka akan keluar data yang kita ketik sebelumnya. 
            </p>
            <p className="pl-6 pt-2">&gt;data 
            </p>
            <p className="pl-6 pb-2">&gt;[1] 10 27 24 13 22 17 19 23 20 49
            </p>
            <p className="pl-6 pt-2 pb-2">[1]	artinya data setelah tanda itu adalah data nomor pertama (baris pertama). Jika data yang kita input salah, misalnya data nomor 4 seharusnya 12 dan bukan 13, maka
           </p>
           <p className="pl-6 ">&gt;data[4]=12
           </p>
           <p className="pl-6 ">&gt;data
           </p>
           <p className="pl-6 pb-2">[1] 10 27 24 12 22 17 19 23 20 49
           </p>
           <p className="pl-6 ">Jika data yang kita ketik kurang, misalnya seharusnya ada (15) diantara data ketiga dan keempat, maka
           </p>
           <p className="pl-6 pt-2">&gt;data=c(data[1:3],15,data[4:10])
           </p>
           <p className="pl-6 ">&gt;data
           </p>
           <p className="pl-6 ">[1] 10 27 24 15 12 22 17 19 23 20 49
          </p>
          <p className="pl-6 pt-2">Beberapa perintah dalam R beserta output yang dihasilkan mengikuti entri pada data
          </p>
          <p className="pl-6 pt-2">&gt;mean(data)
          </p>
          <p className="pl-6 ">[1] 22.4
          </p>
          <p className="pl-6 pt-4">&gt;mean(data)
          </p>
          <p className="pl-6 ">[1] 21
          </p>
          <p className="pl-6 pt-4">&gt;sum(data)
          </p>
          <p className="pl-6 ">[1] 224
          </p>
          <p className="pl-6 pt-4">&gt;data^2
          </p>
          <p className="pl-6 ">[1]	100	729	576 169 484	289	361	529	400 2401
          </p>
          <p className="pl-6 pt-4">&gt;data^2-mean(data) 
          </p>
          <p className="pl-6 ">[1]	77.6	706.6 663.6 146.6 461.6 266.6 338.6 506.6
          </p>
          <p className="pl-6 ">[9] 377.6 2378.6
          </p>
          <p className="pl-6 pt-4">&gt;var(data)  
          </p>
          <p className="pl-6 ">[9] 377.6 2378.6
          </p>
          <p className="pl-6 pt-4">&gt;sd(data)  
          </p>
          <p className="pl-6 ">[1] 10.6479
          </p>
          <p className="pl-6 pt-4">&gt;length(data)  
          </p>
          <p className="pl-6 ">[1] 10
          </p>
          <p className="pl-6 pt-4">&gt;sum(data^2-mean(data))/length(data)-1   
          </p>
          <p className="pl-6 ">[1] 580.4
          </p>
          <p className="pl-6 pt-4">&gt;sum(data^2-mean(data))/length(data)-1   
          </p>
          <p className="pl-6 ">[1] 646
          </p>
          <p className="pl-6 pt-4">&gt;rank(data)   
          </p>
          <p className="pl-6 ">[1] 1 9 8 2 6 3 4 7 5 10
          </p>
          <p className="pl-6 pt-4">data&gt;25
          </p>
          <p className="pl-6 ">[1] TRUE FALSE TRUE TRUE TRUE TRUE TRUE TRUE TRUE FALSE
          </p>
          <p className="pl-6 pt-4">	sum(data&gt;25)
          </p>
          <p className="pl-6 ">[1] 8
          </p>
          <p className="pl-6 text-justify pt-4">Jika ada 1000 pengamatan dari distribusi normal N(0,1) maka dapat disimulasikan sebagai berikut
          </p>
          <p className="pl-6 pt-4">&gt;rnorm(1000)
          </p>
          <Ace1_1 />
          <p className="pl-6 text-justify pt-4">Kemudian jika ada 1000 pengamatan dari distribusi normal N(0,1) maka dapat disimulasikan dengan grafik interaktif sebagai berikut.
          </p>
          <p className="pl-6 pt-4">&gt;plot(rnorm(1000))
          </p>
          <AceShiny1_1 />
          <p className="text-justify pl-4 indent-first-line pt-4">
          Perintah ini menarik 1000 angka secara acak dari distribusi normal (rnorm = random normal) dan memplotnya dalam grafik. Hasil dapat dilihat pada Gambar 3.
          </p>
          <Image className="flex mx-auto relative pt-2" src={image3_1} alt="image_1" width={1000} height={1000} />
          <h4 className="text-[16px] text-center">Gambar 3. Output R untuk distribusi normal dari 1000 angka acak</h4>
          <p className="text-justify pl-4 indent-first-line pt-4">
          Dua karakter “&lt;&mdash;“ harus dibaca sebagai satu simbol: panah yang menunjuk ke variabel yang diberi nilai, ini dikenal sebagai operator penugasan. Spasi di sekitar operator umumnya diabaikan oleh R. R memiliki case sensitive, b dan B adalah berbeda. Sehingga pengetikan yang salah akan menampilkan pesan error. Sebagai contoh:
          </p>    
          <p className="pl-6 pt-3">&gt;b&lt;&mdash;5&mdash;3 
          <br />&gt;b 
          <br />[1] 2 
          <br />&gt;B 
          <br /> &gt;B 
          <br /> &gt;	Error: object "B" not found 
          <br />Tanda # dapat digunakan untuk memberi keterangan pada pengetikan program di R. 
          <br />&gt;5*3 # comments like this are ignored in R 
          <br />[1] 15
          </p>
          <h2 className="bg-gray-200 border-l-8 border-[#2d7343ac]  font-bold pt-3 pb-3 pl-2 text-[21px]">1.3 Latihan
          </h2> 
          <p className="pl-6 pt-2">Ketikkan perintah berikut pada layar R-Studio anda dan perhatikan output yang dihasilkan 
          <br /> &gt;5*5 
          <br />&gt;sqrt(100) #sqrt adalah sintaks untuk akar 
          <br />&gt;log(100) 
          <br />&gt;log10(100)
          <br />&gt;x&lt;&ndash;3*5 #x adalah tanda untuk simbol variabel 
          <br />&gt;x 
          <br />&gt;x+10 
          <br />&gt;latihan&lt;sqrt(x+10) 
          <br />&gt;y&lt;&ndash;1:10 
          <br />&gt; y 
          <br />&gt; y &gt;8 
          <br />&gt; y^2 
          <br />&gt; log(y)
          <br />&gt; z&ndahs;&lt;1:9
          <br />&gt; z
          <br />&gt; 100*y+z #notice recylcling
          <br />&gt; rnorm(15) #rnorm adalah random normal
          <br />&gt;plot(rnorm(1000)) 
          </p>
          <div className="text-justify pl-4 indent-first-line pt-4">
          Berikut adalah data berat dan tinggi badan dari 6 sampel :
          <br />Berat (kg) : 60, 72, 57, 90, 95, 72
          <br />Tinggi (m) : 1.75, 1.80, 1.65, 1.90, 1.74, 1.91
          <br />Gunakan R-Studio untuk menentukan : 
          <br /> 
          <ul className="list-disc text-justify pl-3 pb-3">
            <li>Indeks massa tubuh dengan rumus : imt&lt;&ndash;weight/heigth^2</li>
            <li>Rataan data (mean)</li>
            <li>Simpangan baku</li>
            <li>Plot yang sesuai untuk data tinggi dan berat badan</li>
         </ul>
          </div>
          <h2 className="font-bold">REFERENSI</h2>
          <p className="pl-4  pt-2">Bruce, P., Bruce, A. and Gedeck, P. (2020) Practical Statistics for Data Scientists. United States of America: O’Reilly Media, Inc.,.
          </p>
          <p className="pl-4  pt-2">Dalgaard, P. (2008) Introductory Statistics with R. second. Denmark: Springer.
          </p>
          <p className="pl-4 pt-2">J Horton, N. and Kleinman, K. (2015) Using R and RStudio for Data anagement, Statistical Analysis ,and Graphics. second. Boca Raton, Florida: CRC Press, Taylor & Francis Group
          </p>
          <p className="pl-4 pt-2">Verzani, J. (2011) Getting started with Rstudio. United States of America: O’Reilly Media, Inc.
          </p>
        </div> 
      </div>
    </div>
  </div>
</div>
</div>
<Image className="bottom-0 mx-auto pt-2 w-[full] h-[200px]" src={eclipse2} alt="compiler" /> 
    </>
    
  );
};

export default Modules;