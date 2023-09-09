import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar3 from "../components/Navbar2";
import Image from "next/image";
import eclipse2 from "../Assets/eclipse2.png";
import withAuth from '../components/withAuth';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import MuiAlert from '@mui/material/Alert';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import { storage } from "../lib/firebaseClient";
import logopdf from "../Assets/logopdf.png"

const Ace = dynamic(() => import("../components/Editor1_1"), { ssr: false });
const AceShiny = dynamic(() => import("../components/EditorShiny1_1"), { ssr: false });

const pdfPath = 'gs://rwikistatweb.appspot.com/ModulesPDFs/Modul BAB II.pdf';

type ModuleBab2Props = {
  showUnauthorizedAccessWarning?: boolean;
};

const ModuleBab2: React.FC<ModuleBab2Props> = ({ showUnauthorizedAccessWarning = false }) => {
  const [open, setOpen] = useState(showUnauthorizedAccessWarning);
  const { user, loading } = useAuth();
  const router = useRouter();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null); 

  const pdfPath = 'ModulesPDFs/Modul BAB II.pdf';

  useEffect(() => {
    const fetchPdfUrl = async () => {
      const url = await storage.ref(pdfPath).getDownloadURL();
      setPdfUrl(url);
    };

    fetchPdfUrl();
  }, []);
  const handleDownload = () => {
    if (pdfUrl) {
      const link: HTMLAnchorElement = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'filename.pdf';  // Give your desired filename here
      link.target = '_blank'; // This will open the link in a new tab
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error("No URL available for download");
    }
  };
  useEffect(() => {
    if (!loading && !user) {
      Cookies.set('unauthorized-access', 'You must log in to view this page.');
      router.push('/');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (showUnauthorizedAccessWarning) {
      setOpen(true);
    }
  }, [showUnauthorizedAccessWarning]);
  return (
    <>
   <Head>
    <title>Rwikistat-Modules</title>
   </Head>
<Navbar3 />
  <div className="flex flex-col">
    <div className="flex-col pt-10 pl-[50px] pr-[50px] items-center">
        <div className="bg-[#2D7353] drop-shadow-xl text-[22px] text-center pl-4 pr-3 rounded-xl text-white">
          <h1 className="text-[40px]">BAB II</h1>
          <h1 className="text-[40px]">STATISTIKA</h1>
        </div>
        <button
              onClick={handleDownload}
              className="flex flex-row  item-center mb-4 bg-[#EA4335] hover:bg-white hover:text-black hover:border-2 hover:border-black  text-white font-bold py-2 px-4 rounded w-[400px] h-[40px]">
            <Image className="flex mr-2" src={logopdf} alt="logopdf" width={20} /> 
              View and Dowload Module in PDF format
          </button>
    <div className="ml-3 flex bg-white flex-col items-center">  
      <div className="pt-2 pl-3">
      <br />
        <div className="pl-[30px] text-[18px] pr-[40px]">
          <h2 className="bg-gray-200 border-l-8 border-[#2d7353ac] font-bold pt-3 pb-3 pl-2 text-[21px]">2.1	Pengertian Statistika</h2>
            <div className="pl-3 pb-6 pt-3">
              <p className="text-justify pl-4 indent-first-line">
                Statistika merupakan ilmu yang mempelajari tentang bagaimana cara mengumpulkan, menyajikan, menganalisis, dan menginterpretasi data yang bertujuan untuk memperoleh suatu informasi yang mudah dipahami oleh masyarakat umum. Sedangkan, statistik merupakan hasil yang diperoleh dari analisis data. Statistika berasal dari istilah-istilah bahasa latin modern yaitu “statisticum collegium” yang artinya dewan negara dan bahasa Italia yaitu “statista” yang artinya negarawan atau politikus. Statistik pertama kali digunakan oleh seorang guru besar dari Marlborough University dan Gottingen yang bernama Gottfried Achenwall. Pada tahun 1749, Gottfried Achenwall menggunakan statistik pertama kali dalam bahasa Jerman sebagai nama kegiatan analisis data kenegaraan atau diartikan dengan ilmu tentang negara. Adapun pengertian statistika dari beberapa referensi sebagai berikut:
              </p>
              <ul className="list-decimal text-justify pl-[80px] pr-[80px] pt-3">
                <li>
                  Statistik inferensial adalah bagian dari ilmu statistika yang memfokuskan pada pembuatan kesimpulan tentang populasi berdasarkan data sampel. Teori probabilitas dan statistik digunakan untuk mengestimasi parameter populasi dan membuat keputusan mengenai karakteristik dari populasi (Berenson et al., 2014)
                </li>
                <li>
                  Statistik inferensial berhubungan dengan membuat generalisasi tentang karakteristik populasi berdasarkan data sampel yang diambil. Ini menggunakan prinsip probabilitas dan metode statistik untuk menaksir parameter populasi dan membuat kesimpulan tentang karakteristik populasi secara umum (Utts, 2015)
                </li>
                <li>
                  Mahasiswa dapat mengoperasikan perangkat lunak statistika open source R dan R- Studio menggunakan dasar-dasar algoritma komputasi untuk memformulasikan penyelesaian masalah
                </li>
                <li>
                  Mahasiswa mampu menjelaskan konsep teoritis dan prinsip-prinsip pokok statistika dengan benar dan baik
                </li>
              </ul> 
              <p className="text-justify pl-4 indent-first-line pt-3">
                Statistika menggunakan berbagai teknik matematis dan komputasi untuk menganalisis data dan membuat estimasi tentang populasi. Hal ini membantu untuk mengidentifikasi pola dan hubungan dalam data, mengevaluasi hipotesis, dan membuat ramalan dan proyeksi untuk masa depan. Di era modern, Statistik memegang peran yang sangat penting dalam berbagai bidang. Beberapa bidang yang menggunakan statistik antara lain: ilmu pengetahuan, bisnis, ekonomi, pemerintahan, dan industri. Dalam ilmu pengetahuan, statistik digunakan untuk menguji hipotesis dan membuat kesimpulan berdasarkan data. Dibidang bisnis, statistik membantu dalam pengambilan keputusan dengan menganalisis data pasar, konsumen, dan
                finansial. Bidang ekonomi, statistik digunakan untuk memahami tren ekonomi dan memprediksi perkembangan ekonomi di masa depan. Pemerintah juga menggunakan statistik untuk mengumpulkan dan menganalisis data demografi, sosial, dan ekonomi untuk membuat kebijakan publik yang informatif. Dan dalam industri, statistik digunakan untuk mengoptimalkan produksi dan memprediksi tren pasar.
              </p>
              <br />
              <h2 className="bg-gray-200 border-l-8 border-[#2d7353ac] font-bold pt-3 pb-3 pl-2 text-[21px]">
                2.2	Statistika Deskriptif dan Inferensia
              </h2>
              <p className="text-justify pl-4 indent-first-line pt-3">
                Pada dasarnya, statistika terdiri atas dua cabang yaitu statistik deskriptif dan inferensia. Statistik deskriptif merupakan cabang dari ilmu statistika yang berfokus pada bagaimana data yang harus dipresentasikan dan disajikan. Proses ini melibatkan pengumpulan data, tabulasi, dan visualisasi data melalui representasi seperti histogram, grafik batang, dan diagram lingkaran dengan tujuan untuk menjelaskan data secara efektif dan mudah dipahami. Selain itu, Statistik deskriptif juga diartikan sebagai bagian dari ilmu statistika yang berkaitan dengan pemrosesan, penganalisisan, penginterpretasian, pemaparan, dan pengorganisasian data. Ini menyediakan ringkasan yang sederhana mengenai data sampel dan mengukur tren, seperti tren sentral (rata-rata, median, modus) dan variasi (deviasi standar) (Berenson et al., 2014).
              </p>
              <p className="text-justify pl-4 indent-first-line pt-2">
                Sedangkan, statistik inferensial mempelajari bagaimana membuat kesimpulan tentang populasi berdasarkan sampel data yang diambil dari populasi tersebut. Statistik inferensial memiliki tujuan untuk menggunakan data sampel untuk membuat kesimpulan tentang populasi. Tujuannya adalah untuk mengestimasi parameter populasi dan membuat keputusan tentang karakteristik populasi dengan menggunakan teori probabilitas dan statistik (Wackerly et al., 2014). Hal ini dilakukan dengan menggunakan teknik seperti uji hipotesis, analisis varians, dan estimasi untuk membuat ramalan tentang suatu populasi dan memahami seberapa akurat ramalan tersebut. Kedua cabang statistika ini sangat erat hubungannya dan sering digunakan bersama-sama untuk menyelesaikan masalah. Statistik deskriptif membantu untuk mempresentasikan data dengan jelas, sementara statistik inferensial membantu untuk membuat kesimpulan dan ramalan berdasarkan data tersebut.
              </p>
              <br/>
              <h2 className="bg-gray-200 border-l-8 border-[#2d7353ac] font-bold pt-3 pb-3 pl-2 text-[21px]">
                2.3	Istilah-Istilah dalam Statistika
              </h2>
              <p className="text-justify pl-4 indent-first-line pt-2">
                Beberapa istilah-istilah penting dalam statistika (Berenson et al., 2014):
              </p>  
              <ul className="list-decimal text-justify pl-[80px] pr-[80px] pt-3 gap-2 flex flex-col">
                <li>
                  Populasi
                  <br />
                  Populasi adalah kumpulan seluruh objek atau individu yang memiliki karakteristik yang sama dan memiliki kepentingan dalam suatu penelitian. Populasi dapat berupa
                  manusia, hewan, tanaman, benda-benda, atau bahkan konsep atau peristiwa. Sebagai contoh, populasi manusia di suatu negara adalah kumpulan seluruh individu yang tinggal di suatu negara tersebut, selain itu populasi dari perusahaan yaitu kumpulan seluruh perusahaan dalam suatu industri atau sektor tertentu. Secara umum, populasi adalah subyek penelitian yang ingin kita ketahui lebih lanjut dan membuat kesimpulan tentang. Oleh karena itu, populasi harus didefinisikan dengan jelas dan tepat untuk memastikan validitas dan akurasi hasil penelitian.
                </li>
                <li>
                  Sampel
                  <br />
                  Sampel adalah sekelompok individu atau objek yang dipilih dari populasi untuk mewakili populasi tersebut. Sampel digunakan untuk membuat generalisasi tentang populasi dan untuk membuat inferensia tentang populasi dengan menggunakan data sampel. Misalnya, jika kita ingin mengetahui opini publik tentang suatu isu politik, kita dapat memilih sekelompok orang dari populasi yang lebih besar dan menanyakan pendapat mereka. Jika kita memilih sampel yang representatif, kita dapat membuat generalisasi tentang opini publik dan membuat inferensi tentang bagaimana orang lain di populasi akan memikirkan isu tersebut. Sampel harus dipilih dengan benar agar bisa mewakili populasi dan menghasilkan inferensi yang akurat. Ada berbagai teknik pemilihan sampel, seperti pemilihan sampel acak sederhana, stratified random sampling, dan cluster sampling. Penting untuk memilih sampel yang representatif agar inferensi yang dibuat dapat diterima dan diterapkan pada populasi secara keseluruhan.
                </li>
                <li>
                  Parameter
                  <br />
                  Parameter adalah nilai yang menggambarkan suatu karakteristik dari populasi, seperti mean (rata-rata), varians (varian), atau proporsi (rasio).
                </li>
                <li>
                  Statistik 
                  <br />
                  Statistik adalah nilai yang menggambarkan karakteristik dari sampel, seperti mean (rata-rata), varians (varian), atau proporsi (rasio).
                </li>
                <li>
                  Estimasi
                  <br />
                  Estimasi adalah perhitungan yang menggunakan sampel untuk memperkirakan nilai parameter populasi.
                </li>
                <li>
                  Interval estimasi
                  <br />
                  Interval estimasi adalah interval yang berisi nilai-nilai yang mungkin dari suatu parameter populasi dengan tingkat keyakinan tertentu.
                </li>
                <li>
                  Uji Hipotesis
                  <br />
                  Uji Hipotesis adalah proses pembuatan suatu hipotesis tentang nilai suatu parameter populasi dan pengambilan keputusan berdasarkan data sampel.
                </li>
              </ul>
              <br />
              <h2 className="bg-gray-200 border-l-8 border-[#2d7353ac] font-bold pt-3 pb-3 pl-2 text-[21px]">
                2.4	Tipe dan Jenis Data
              </h2>
              <p className="text-justify pl-4 indent-first-line pt-3">
                Tujuan penggunaan statistik digunakan untuk memberikan informasi dari suatu analisis data. Data diperlukan untuk berbagai alasan dalam membuat keputusan yang informatif, mengetahui tren dan pola, evaluasi dan pemantauan, pemodelan dan ramalan, dan penelitian serta pengembangan. Alasan-alasan penggunaan data diantaranya yaitu pertama data membantu membuat keputusan yang didasarkan pada informasi yang akurat dan obyektif. Data memberikan pandangan yang jelas dan objektif tentang situasi atau masalah yang ada, sehingga membantu dalam membuat keputusan yang tepat. Kedua, data membantu mengidentifikasi tren dan pola dalam suatu situasi atau masalah. Ini membantu dalam mengidentifikasi perkembangan dan memahami bagaimana faktor tertentu mempengaruhi situasi tersebut. Ketiga, data membantu dalam evaluasi dan pemantauan kinerja suatu program atau kegiatan. Ini membantu memastikan bahwa program atau kegiatan tersebut berjalan dengan baik dan sesuai dengan tujuan yang ditetapkan. Keempat, data membantu dalam membuat model dan membuat ramalan tentang situasi atau masalah di masa depan. Ini membantu mempersiapkan diri untuk situasi atau masalah yang mungkin terjadi di masa depan. Kelima, data membantu dalam melakukan penelitian dan pengembangan dalam berbagai bidang, seperti bisnis, teknologi, kesehatan, dan lain-lain. Adapun tipe dan jenis dari data sebagai berikut (Berenson et al., 2014):
              </p>
              <ul className="list-decimal text-justify pl-[80px] pr-[80px] pt-3 flex flex-col gap-2">
                <li>
                Data kuantitatif adalah data yang dapat dinyatakan dengan angka dan digunakan untuk mempelajari hubungan antara variabel-variabel. Terdapat dua tipe data kuantitatif:
                <br />
                <ul className="list-disc text-justify pl-[80px] pr-[80px] pt-1 pb-2">
                        <li>
                          Data diskrit merupakan data yang hanya dapat dinyatakan dalam jumlah tertentu, seperti jumlah anak dalam suatu keluarga.
                        </li>
                        <li>
                          Data kontinu merupakan data yang dapat dinyatakan dalam skala yang lebih halus, seperti berat badan
                        </li>
                </ul>
                </li>
                <li>
                  Data kualitatif (atau data kategorikal) adalah data yang dapat dinyatakan dalam kategori-kategori, seperti jenis kelamin, agama, atau pendidikan.
                </li>
                <li>
                	Data time series adalah data yang diambil pada waktu-waktu yang teratur, seperti data ekonomi atau data cuaca.
                </li>
                <li>
                  Data cross-sectional adalah data yang diambil pada waktu yang sama dari populasi yang berbeda
                </li>
                <li>
                  Data primer adalah data yang diambil dari sumber utama, seperti hasil wawancara atau kuesioner.
                </li>
                <li>
                  Data sekunder adalah data yang diambil dari sumber yang sudah diolah, seperti buku statistik atau database.
                </li>
                <li>
                  Data longitudinal adalah data yang diambil dari waktu ke waktu dari populasi yang sama.
                </li>
              </ul>
              <br />
              <h2 className="bg-gray-200 border-l-8 border-[#2d7353ac] font-bold pt-3 pb-3 pl-2 text-[21px]">
                2.5	Latihan Soal
              </h2>
              <ul className="list-decimal text-justify pl-[80px] pr-[80px] pt-7 pb-2 flex flex-col gap-2">
                        <li>
                          Apa yang dimaksud dengan data kategorikal? Berikan contoh 
                        </li>
                        <li>
                          Jelaskan perbedaan antara data nominal dan data ordinal
                        </li>
                        <li>
                          Apa yang dimaksud dengan data interval? Berikan contoh
                        </li>
                </ul> 
                <br />
                <h2 className="bg-gray-200 border-l-8 border-[#2d7353ac] font-bold pt-3 pb-3 pl-2 text-[21px]">
                 Referensi:
                </h2>
                <p className="pl-4  pt-7">
                  Berenson, M. L., Levine, D. M., & Krehbiel, T. C. (2014). Basic Bussiness Statistics 14th Edition. Pearson.
                </p>
                <p className="pl-4  pt-2">
                  Utts, J. (2015). Seeing Through Statistics 4th Edition. Cengage Learning.
                </p>
                <p className="pl-4 pt-2">
                  Wackerly, D. D., Mendenhall, III, W., & Scheaffer, R. L. (2014). Mathematical Statistics with Applications 7th Edition. Cengage Learning
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

export default ModuleBab2;