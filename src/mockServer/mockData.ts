// 수정 및 삭제 금지

const mockData = {
  musics: [
    {
      id: '1',
      title: 'Champion 80bpm',
      moods: ['웅장한'],
      genre: '오케스트라',
      public_date: '2023-06-01T17:56:55.311551',
      url: 'https://cdn.pixabay.com/download/audio/2023/01/09/audio_5718d4ca9f.mp3?filename=champion-80bpm-132686.mp3&g-recaptcha-response=03AL8dmw91XxUfqCkneLyteRGbQ8R2SphHMw-b_-GiG0djUhl8k8Uk_5CkCqeAvvKrr2kVrVzxK6LrsP_NHCG7EFI00tp68TEDKYWaDcztB_P5KrGpckO0LyJiEiJmrHX1aUyp3-XrJDlbfT5EKl0GQduWh61o1nkSMRLejybOcs3aCA6kSnIVvw8EHb43yEkkJ7yABbxOtS__DbcQXtTgyH_vnE-AAGG5t18aNGB0Jx6G20lxbzUeExXqiO-oMr2Ul7LiyNF8E4g-D4asiVMruAk1kBF--EjCPlJ-0kohOcFEgKPCbiw6i0VQGG4l1xBwLtI7nBASeAT8DhPzntpuUiyXwIBeJDOh7abmrS94cuq5R75zVcoLs3wbBmj2NxrOzXZD2GKfH-nWcGIOECDlrIdz2D2pbsoMqJOjkejAAqXa-84IAblsahd-5VWsviQEf8JsnMBGqSA7IxBmphiOqTsXmo3lwr6BvXPB8IOzLN34tZkS_Wywo5878G8Z5JniTWP8GILhFFK5UZYgXYoRX1kGfUlbsKtDeQ&remote_template=1',
    },
    {
      id: '2',
      title: 'Retry city',
      moods: ['레트로', '신나는'],
      genre: '베이퍼웨이브',
      public_date: '2023-06-01T17:56:55.311551',
      url: 'https://cdn.pixabay.com/download/audio/2022/01/13/audio_4999a27d7b.mp3?filename=retro-city-14099.mp3&g-recaptcha-response=03AL8dmw8hxazwIj1FfQoyow5Nh7FlAoo1r9Hr1UTqBecP0hsHuO2U64k85WRrdtZnkfDDEPIYk6yMLtdNcWNio6pJSVrsw7BZ8h2vyyRW4Iqx_Z9RuR4Zt6isWP2QXU27pwpK_NV8BOLeKVQ30Vsd52CSXZrKW0O35gEmzFJDXSsStf4ShjfsUg1jLoPvD95C_Zv6hCvBLKj1s7g4mGcRbTJkkU7GfZNLhovk5tHWx2HMC6hrezSgmJlFQqPtLpCBRFhl9HRRVlXbBRxhn9FGDjZg0EVf4J-eoN09b77_mFebhR0v5Z7OBMJVvXYAweJAtFU-r6HR3iKwA3yXtTYST176czQ_w6gm7FjsA73MKVBhJ-S3XLRvq0k76LQiGEHKZAAnUZhH5Tf-Lh9xOoY5Xe1Uc7SNu8WGl_hscQ-q1GSeuSY_KWg1wKOJygDELbPtBkvMfEFjWsd-s9BgqstQMPZpgWWsnvqjGRXF_bdI99yUvPq9PvXv_MNESS0Klh02tp1oe6mYHGl6A3HO9rE51lScGI4q1fMWBGDilOapdgP2gPK-XE2eZo4&remote_template=1',
    },
    {
      id: '3',
      title: 'Chillin',
      moods: ['흥겨운'],
      genre: '일렉트로닉',
      public_date: '2023-06-01T17:56:55.311551',
      url: 'https://cdn.pixabay.com/download/audio/2022/02/15/audio_d972972be7.mp3?filename=chillin39-20915.mp3&g-recaptcha-response=03AL8dmw8grorORnEfQ9tThHvY-bhZLSmZInZ18nV23T58NTqkJuqW1xDgKNkDGinZC1RnO77ksqpMkmBeo6Y_LQsl7FFfk9dPGk3FUJ-ydhlenn4E_xLaS0LwHeAJ-UxPWkpkYQ6ZCjbVoPcspacKS2Cy30u0tStlkqT7KGJ1xSHERDlEVFVJvp7mpv9AFJIM2CiXGu6kVdOJU-fXI5z5m4RtyCoY9oXdTU9f5LwAm3hTb501_Qa_3CfKREJZvYcjzyaOGeBoQ4HLlFQFQ8ODbxzJe5vY2A2xAR1K-XUUSc9YQtJczzeNiujQEm1mwXQsXk-jeDqK5GkWf7PznCLMlU5bMNaACLyDHMUh_2W45KFEuiQSOeiHHPCXKcXaSaMdGZI4nnb6lSKZULakST8Mr3nKR9mKnwUnY-xAb6XNeolAAwqzpGF2CCx02qSiXdTcBdKpUtN8BqgWatjzjDcBvYvqThmNh6zo0SFgmCv8PsMkV_VRRhkSCIGLMHxmMrDaGKkpoG0SjMcpkU4U_vGt97owU2Vg22MaVyxpFobFRen8c8ztbgDiGiI&remote_template=1',
    },
    {
      id: '4',
      title: 'eterna canção wav',
      moods: ['슬픈', '부드러운', '비극적인'],
      genre: '가곡',
      public_date: '2023-06-01T17:56:55.311551',
      url: 'https://cdn.pixabay.com/download/audio/2021/12/21/audio_34a0025934.mp3?filename=eterna-cancao-wav-12569.mp3&g-recaptcha-response=03AL8dmw_HdC9y4TIOJCOkXTWzdLZkeLHJb3ZQtj6e_X5AKbYbjmFy-mJNbE6AYCWvtDcJJs4HqP3LaoRTj4-OXfPDvQQ-O15ihAAj6EP5S9ecPX15uIXai2ZeCCCCuuzhApHC_LNylzayVolVT6u-x_NXwi1l8J0izILewouIbQM_CVlaN-VHj9SYPj2S8tHKk-5kYvho3m4WYbz9utgNSInmSPxqdAoaaqvk0GWd4v5BD_EgmbElgBQMQAyKRYIK2LTRfA31wlcKtATiVqAa1BJwOEgXUzV5-THIpYCCj4hg1tENi4BLVTTFZnfMjAQuElCN0vF8zXa81libOUb-Upg6E4Qvbhw371xZBplhdwGGa86RhoB-tUDTablbLRSCUEzDxVgbr6cuBtcSNN0SAiHEYTbnK5G7-dVKH0WqVwcZr2CuzshuOgWfRngcxq6lYUsr_FYmO936ZF5LpOQIQXb8MqIXvMYusS5oizuH7MmoM5T8smqLj38-M9poJ0_QraBOXd0aHYvYCDWz1O_CQeLfntFy5UEbKLhWqQnCJHzIYNOKX4BcR18&remote_template=1',
    },
    {
      id: '5',
      title: 'old school Bass Beat (für DJs, abmischen, Rappen)',
      moods: ['긴박한', '긴장한', '웅장한'],
      genre: '일렉트로닉',
      public_date: '2023-06-01T17:56:55.311551',
      url: 'https://cdn.pixabay.com/download/audio/2022/05/07/audio_36a9f40222.mp3?filename=old-school-bass-beat-fur-djs-abmischen-rappen-110775.mp3&g-recaptcha-response=03AL8dmw8B4LjjruqKO05iHPUgk8Ses7BlEAS1NkVB86QVWfC8wZcgaGsbbNjQIPQsmc4zEzbD6bGMYzZ7baB8-5gkaBZvByBnX4dENR6DGDFssQCyROGEyxDTWoqCfQxXBZQsFWfgdXqRxIjpa9p8jKTcPOAwlK2vEDo2_gCTIhRDt7BUTK5kKf1GBH_f7wZYLbAbTrpeVcM8gyrqFEk68dp3rx5htPodh-rIPsceJ-tJdERqAJj-JHx66DFc7-595RWGVz46qrWLGA9eWEKs1_EQPfJR2I3fVvX0_HIkIeoM13kAJ2x_GfvlCd4bEUWwuOgdwfq9GaIG0a0RhhS0EGTi-LIJvlglvEx2oGmlhV3AtL81dexs_W9t5lOFD-HRYfeDit1VIgU3R_PvEki1jX20xy7gUY4GkSlq3akogOvtz1vkJPFK1pTYRyFeQG6m31RvY5tZTO8YORl2jAFBN0AX1HmxuUAi0CbqfRELB7cPhRCQt8rVy-BmB1w2wSWPcsUQhchcf06t2PZAtDTulTKrcsq2fZCG3fGzEcqp7WOsZwz0E40rjU4&remote_template=1',
    },
    {
      id: '6',
      title: 'epische Melodie für Musik oder Videos',
      moods: ['긴박한', '단순한'],
      genre: '일렉트로닉',
      public_date: '2023-06-01T17:56:55.311551',
      url: 'https://cdn.pixabay.com/download/audio/2021/09/30/audio_982372d461.mp3?filename=epische-melodie-fur-musik-oder-videos-8898.mp3&g-recaptcha-response=03AL8dmw-GtaiSI1jhPJY9l9uyWPQ3AiEubctSmPceLILvq790u0wsNXSrY7SFxWm_ZoQ8lpU1fs1XBOfNVAvqO0ZhvyL5CD3MaqokHoN51Cuft0Ebf50vt1GzLfKH12pgKdcmI_U5kXue5vNtGcCUL3w_pg4L7mykszVJUFdcIJ43YW7PuBdyF8BCvuPv8G266_fO3Q126UQTIiknj0wVdsHjZ0eJuXLwOsD7MyE__wcWG5uQ63EMUyqF8It0rp3vI1uZpaliOQlTlm-5XnZ3LcxKBRKAz3iw0v-qRCxeLo4VSsPToyfDmenC3ReN1zbmwEielehzpjkATGL4QtOAAnR0d0v0JDnATa8Jjn2E8TAVSIChJHKAhUPHPfXJ1SU0r--UmLUrJPqFbt6ZpVLW4BNh4OsCwv8Ujj1VjQd5pe0qRCtKrmj-tjLxqgy0OMHSWaw5sBjxbAtwJNS8NnTEI3SZyTb7CMmie0ptvdONy_A7UEsjk-F_qK873Zoo2QLZbqcoHh3AHF46RR3d7TLrnCKNCJtLsTGihy26SlzMcVYGrhW-sXvagP0&remote_template=1',
    },
    {
      id: '7',
      title: 'Clip 3 - Muzică pentru film',
      moods: ['웅장한', '단순한'],
      genre: '일렉트로닉',
      public_date: '2023-06-01T17:56:55.311551',
      url: 'https://cdn.pixabay.com/download/audio/2021/10/04/audio_e420d0538b.mp3?filename=clip-3-muzica-pentru-film-cinematic-24-biti-wav-120-bpm-104-min-9014.mp3&g-recaptcha-response=03AL8dmw8w4THUKOGSkThKmPteJOGNGUCj8uvjizbKY9BXLwXt2HJnvvEJEZyfWp7vWh-jUyYb-z65hjdwLzCtmO5xIH6EA9u_fW9tMvHf1uEuBAci3v8satq49DdnCwiNUbZKl0KKwce9p7p2iH76ygEveq4eamSTB1qcOqE9ClTls6da8mbNUngZ_YnvTEwEBFAbc5kg3eRyIX7HyOoHPCT51Sg9Hv7pcUvwAehgIHarjPO0e7x-TVjPn0lKl-TuQvDydw9ec37B4mE7Pu14AbJ5FU32V5li_Mu58-MmxOeVXbE_AKRWoemTQOR1n-Tm4dkNNmH7GtkQXxYAlk1gCJu-_eg6a-a7H1fqQVX4tV01fmk03k-zqKk7NoBoQ7q0v-JH4v8MqLAS4o8fJKGFFHMB3fQDkcPu7Mq3Z55QzR6B9WrnLGLrVxKK52vsjHnSbOsxhGUU8UPtVSL7XWKAnS210boH6rjir5McdiZcnQOXMYEaJhxQTdRDxtZhiOS6zS3j8_VNG2Y_QN88_VbcIPdRgw_f3OxYIA&remote_template=1',
    },
    {
      id: '8',
      title: 'Sunrise - Anna li Sky',
      moods: ['밝은', '신나는'],
      genre: '신스',
      public_date: '2023-06-01T17:56:55.311551',
      url: 'https://cdn.pixabay.com/download/audio/2021/09/18/audio_57b88b8668.mp3?filename=sunrise-anna-li-sky-wav-8476.mp3&g-recaptcha-response=03AL8dmw8u6TCaMIlr5Zfle2zVIIoC0hhVZJRLgulcJSJbcV9KHcZVyAKSLLt8Z6jyK9MWxEoJ549-ndQBvfC6C2zWn3JV_bymVHCSAnq1e5NRkW6jao8UXhh6-PvPm78kDPEGqTVDtsk9oQPt47rEHQohltlH4En1nidqM6tcrda54LWl0UQvtpTIW253eDT6G9TdKzPGIjOpgZLOHur9G-jrmC5Sk0WlM9Z47nF0v2Y5pJ5Sqo8DV5L4hybBTIYlnMu-cOSJSjfdCbLtw77lM2k-HWVW8WARmZeRgR4Qqw4XScMk-usWVJshcnFcyAge2LB9puVXb2KmV7tVOK33POekbTvQ2Oyz-ElV2W2BLkoc7W0jPGj5Uu7cMn5jvrfDhlBPhZkIeCgLmlThkwUXBld7D6QnB1KVt8wxOXxEBAMFYRx4EpTccwkL8AIO5MTWzqP2EvusxHt3wmGk6viL6OKZVgJudQc56o6YhyOnxG71O1defWK-FoGYudZK7nnAHGliPPkkv4DSPbgtoSXaB2TKY77aLDEz9Qw_8AzWN3A6boFMi1uI5nA&remote_template=1',
    },
    {
      id: '9',
      title: 'Composition Four',
      moods: ['단순한', '신나는'],
      genre: '기악곡',
      public_date: '2023-06-01T17:56:58.311551',
      url: 'https://cdn.pixabay.com/download/audio/2022/02/13/audio_589f5a6749.mp3?filename=composition-four-guitar-drum-melody-20802.mp3&g-recaptcha-response=03AL8dmw_RtsRz9eq24IayyYrkFIfm2r2cI14OULMRrWXq7kLr2ZuY5j3coNYYWi8NlMT66_HK8xj5wy97UvQ6rYAjmQoyuulfybUVzxUTovgC7HbOdIlupekB8NzIiX9UixQsTdj0saPTJTmDXLl9ZfjfC1YnYtr_JTVNvQQOddlImuCqf5QLKbmLTrxEMvzb04X5lKEN0LZvdaj6-42UXfFVu4uHyKA0pqoFh4Syh7LiBQnN0pqfqr4qPrWmUOXUC5dP2HZ20lN_4iOfK3t1KojJbMYmqkZuDiPfTd-bs3HcM9o1m33mJvKo6Bmhtdq2_3OAb4BXexo6agVEDEtV_2kT3uYemEc__g1h8tcHEhDV-fHOf3i3XlX0tHTMBBUVOhkGdsS0TfkwTLY81ovL7ffXO0b_EEXXLshe9BTbuh9MgEWQKUYtPcRQdUYobAfnMUekiHpy3Edu0KNTq55E1kj4dfUmOuAKE6pHejQ8FLWu0ylxM5k9wSeIqK_2XTEyAgGyZfetSvHtJX6sZ9ukLkQDi633IQSzLny3Fy5ZwEqWu4UkN8FD46c&remote_template=1',
    },
    {
      id: '10',
      title: 'NONSTOPIX - NON STOP',
      moods: ['단순한', '신나는'],
      genre: '기악곡',
      public_date: '2023-06-01T17:56:56.311551',
      url: 'https://cdn.pixabay.com/download/audio/2022/02/13/audio_ce3e9e2831.mp3?filename=nonstopix-non-stop-rising-drum-beat-20804.mp3&g-recaptcha-response=03AL8dmw8H7DAT_5PfCiluo1Y42DZVNB_we3d0kBFNaRnxIIX_3dN5Iln1ujT5vKt8TimFbEJz-6fc7wuDMoIE_YUeE_qnZc5nGdth1QI0OgjDq9fqb1Vr9VIKynCpsTdCs1Fz-tiH9nDYwpaBnWX3fZtfhgwZEs8H-tUsKDivdgWHGtcO-qcPY14J8EzkY1eRIqxc3XIOygLtGGZvBVaAgiah4XeAx-NjPDfHVx3jWUBPOaCTIeTW9SlHWR2Ub8oQ4OHsxnz1ABfKhJHk2uyGIjctWxmUPN8_4Ty4BeWNnYZuLXjyWSflMHaHD0O4SZxRVLsd29URVpih6XvfSWOXksh-rlqn5K1Q93DEFabvJdiPt04xdrfoUu1_CSYY9yjB6Ddwjle5eKfQJDKdk14kReu5GxZDv1U86FONH10WLN41HfLUueQSJk2hwJBDg00oyW6umHCwEabNjZB0jojQMlsESvGlqOcI4HiiOZNi09kvuDVPk7ZdaMv0ys3KUwTg1rGZoU7zu-VZLMOIW6-6uAkHRHjekAMb8zKUdnsF-zqNE8MESmoz9qc&remote_template=1',
    },
  ],
};

export default mockData;
