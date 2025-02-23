import { Input, Button, Select, Tag, Space } from 'antd'
import React, { useState } from 'react'

import CommonPage from 'components/layout/Page'
import { Project } from 'types/type'

import ProjectCard from '../../components/projectpage/ProjectCard'

const { Option } = Select

const ProjectPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Building Scalable Web Applications',
      category: 'Web Development',
      date: 'January 2025',
      description: 'An introduction to building scalable web applications...',
      content:
        'This project demonstrates best practices for building scalable, high-performance web applications.',
      tags: ['Web Development', 'Scalability', 'Performance'],
      imageUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTEhUTEhEWFRUXGRsbFxYWFhgaIBsgGRgXHRcYGxgYISggGxolHRgdIjMhJSkrLi4uGCIzODMsNygtLjcBCgoKDg0OGA8PGy8fHyUrLS43MzI3LSs3ListNzcrLi8wLSsuLTA1Ly0rMy03Li4tNy8uNTcsNy01Ky0tLSsrLv/AABEIAQsAvQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAwIEBQEGBwj/xABIEAABAgUCAwQHBAYHCAMBAAABAhEAAxIhMQRBIlFhBRMycQYUQlKBkfAjocHRJDNicqKxBzRTgpKysxUWNVRjwuHxF0PDJf/EABoBAQACAwEAAAAAAAAAAAAAAAAFBgECBAP/xAAsEQEAAQMCBAQFBQAAAAAAAAAAAQIDEQQhBTFBgRITMnEUIzNR8DRhkaHB/9oADAMBAAIRAxEAPwDVJj2voH+qmfv/APaI8dL061VFKFKCbmkEt1LYxHsPQRQ7qZ+//wBoia1uPJnsonAon4ymZ+0vUQRGsQViIVe0oIjWIKxASgiNYgrEBKCI1iCsQEoIjWIKxASgiNYgrEBKCI1iCsQEoIjWIKxASgiNYgrEBKCI1iCsQEoI4kvcR2A+YaUzO7nJQhwaalEA0gV7Hcub5tHpPQLwL/e/AR5zRTViXOShFSSAVlyKQKg9jccWOkej9AvAv978BEvq/p1+8KZwb9RZ3n01dt55fkvVwQQRELmIIIIAggggCCCCAIIIIAggggCCCCAyT6Sab+2/hX+UH+8em/tf4V/lHzparnzP84yu3O1DLFMu6yH8hzgPrf8AvHpv7X+Ff5Qf7xab+1/hX+UfnzXa/UlJdakpO4LfJo52L6XzZSqZzzZXve0nmf2h0Pz2gzh+gz6Sab+1/hX+UaGj1SJqQuWqpJwbjBIOeoj5alYUkKSXBAII3BwY956Hf1ZPmr/OqDDYkeEfW8Mhcjwj63hkB8z7PnTAiZ3Yl05mVlIcMUtxEFuNnF3LPtHofQLwL/e/AR5rSaWYpKqGZfAX6faf/nHpfQLwL/e/ARL6vHl1dlM4NNXxFrOcYq58u39PVwQQRELmIIIIAggggCCCCAIIIIAggggCCCCA+PTuxRUo+szw5NgU8/3Yv+jHZiQqbUSsuEhUxiaaUlsYdRivodYlSlImkhblilJYgm3URo6jSTZbKlTMsSGBBDh3BPJ8R06quzVa+XjOyO4ba1lGp+fmaZieuf8AVL0m7F04STTc7JJA+UfJO1ilJIlux2O3lH0DtbW6jUmcmWu0uZQlISzgZUpRB32tvePBdq6QoUoEhRB23vdvnEdRM5Tt2mMbQz/94NSgBCJ6wlIAABwAMR+i/wCiHUKmdl6da1FSlBbk7/azI/MGqapTc4/TX9C//CNN5L/1ZkdHRx9XtJHhH1vDIXI8I+t4ZAfNuzpc4y5ipa0pSl3qDsaF3BpISaag5Iy2Wje9Af1a/wB78BHntAmYZc1SZoQlF1Ah6nTMDMxe1QY849D6BeBf734CJbVeiv3hTuEfXs8+VXPl2ergihou2ZM2dOkS5lUyRT3qaVBq3pYkMrwkcJLEEG8N1PaMtBUColSQlSkISpawFqKUqoQCpiQbt7J5GIlcVqCM7s/tmXOmTES0rIllSVTKCEVIUErQFHKgbWs4PIxbOpHeCWyqikqehVLAgNW1NV/C7s5ZhAOgioO0Ed/6u57wSxMZrUlRTnm4xHezO0JeolInSVVS5iQpCmIcHBZQBHxEBaghWn1CFglCgoBSkkpIIdKilSbbhQII2IMZMz0p04mrkusrQZgKUy1qLykSVrACQSo0z0MALueUBtwQQQBBBBAEEEEB867I9F5csrUU8ai5VUf5DEd9I1mQmUEm1w56F7k233j5j23/AEma1ZXKQtEkJWoVS08TJUQzqcD4B48xpu3ZyZonrWucQ/DNWpYUDkGonP8AMCEWYmlv50+LMvTSu052nnTq1EpmXLAAC5ZVvNvlHntfP+zmKquA7g7lQA/nHq/STsDUrb1eQlaZiAsLQwKkKZnBtuLfJ48R29pZkttOpBQRxLCgxOyX++NKbe7eu7thjBTx+oP6Fv8AhGm8l/6syPzQiUAGj9M/0ND/APk6byX/AKsyPaqnEPCJezkeEfW8Mhcjwj63hkaMvk6NQpIUlKiArxDnn8z849Z6Clpcxg98c7CPHHMex9Bn7uYzO9nw7Bn6RNa2I8qZ9lF4FVM6ymJnaIl5/U+hms7hTLSuZqNNqpc9HCkJmagmckhWVhM0qTfAXaLfa3oS06arTaWUBMkSUpWKQpMxGoUuaSTxErSpLqck0X2j2On085NNU0KAPEWYkUpAPJ3BJ6mFS9PqA4ExJDuHN2fDlJyPk/SIVeniZvoFNSFnTypMmcpWv+1SyTTOWo6ZJUgVUhLC3h2xD9d6LzVD7DQSJEsyRLXIaQoX1ElcxSUkGWpdCCUlYZ0hxHtFyZ7JpmJxxuLk3JKSzDlgtyjiZGou81JO1mGeTfibWsbwHnPQn0dn6aYDNApTKmS08SSwOrmzJaWSEgAS1JFgAGYAANGJ2b6Cz0yAFy0GdLk6FMlVYdEyRNWZykq9nhKQ4yLYj3Z0moAFM8WSBxAFywqNhlwT/exaJzZeoKiUrQEvwgpuzjLP1Hl1Ng8BN9A5gFA0yBJTN1RKJXccYnTArTzQmakpCpUt5YdlJfhLQdr+hGrX6wEsrvEalKVLWKlGbptBLQVEBnKtOtz5c4+gKkz6gRMS1IBBve7qHDnBbFmtmIqkahx9qlgBanJCWLlrpKi9gMWgPm2q7LVM1ncSVyfWzP1i16mXMqmITM0+pTpzOSBVLEszUIDm1Iody2t2Z6EGqRXIaUJwVOkr7juyBpp8sqSiSlIVUqYgGoOoJDi0eyEnUt+tQ7nKX9lITgC1QJPN8iOTJOpY/aJcFwA1w5ISXTc4DuPuuHjOz/RHUIpEySiYRIErTzCpKjo1JmTmmIC/2VSjUk1fZAbCNv0D7AVpRMK0KlqWmWFIeSUFSAqqYkSkpdSqrrWKlBKXxG5MkTyFATEgkCktggBzcEMS/Pyi5IQQkAlzufrba94BkEEEB+N+0/101v7SZ/nMKJtH6km/0edmqUVHQySSXJp3OTEf/jjsz/kZP+GPSK4hrh8j9GO2Fy+0JaA6paZUqQpPRElBq6UrrV5FXOPHelHaC5uqnzJrVBRSQMJo4aU9Azffkx+l9P6FaJC+8RpkJW71AXc2JeK8z+jvs1RJVopRJLklNyTkmMzXB4X5YMy7fOP0z/QyX7J03kv/AFZkXP8A437M/wCRk/4Y3+yuzJWmliVIQES0vSlNgHJJb4kn4xpVVlmIwsSPCPreGQuR4R9bwyNWXyJUex9BkvLmA4Jb5gRWPoXM/tUfIxtejvZKtOFIUoEqu4+A3iV1d+3Xammmcqhwfh2psaqLlyjEYn7LCexgCGmzQ21XRsDfF+kTkdkpTS0yayaWFZbhJIDcrtEtRrJctQRM1KUKV4UqVLBLlgwIc3tFhYYOZhA5mgfhEREQuk1143V19lpKUJKlMhqfC9ma4FsC4v1hCuxy5+3mAFrPcM7sdntta/OLMvUIU9M8GlqmKLOHD2s4vE+8S7d9d2Z0ZapsZpv5Q8MMRdqjq5o9CmWSQVFwBxF8FRzl+IxaipMnoSxM9nNIcoub8ItnhNuh5QwYfvS3Pg/KNojDSZmZzJ8EIUGcmaQ2fB+UJl6qWp6dQCwJLKlmwJBNhgFJD8weUGF2CFCWffV/D+UHdn31fw/lANghNH/UP8P5RxVgSZpAGTwflAPghNP/AFD/AA/lHEh8TSdvY2ztAPghAD3E0t/c/KBdg5mkbXo5gNjmQPjAPghCQ7gTTax8FrAtjkR84Bv9qbZ8HIHlyI+YgHwQmn/qH+H8olLG9ZVt7O2cCAJHhH1vDIXI8I+t4ZAEL9v4fjDIROLEkEDhNzj4wHy/0onS9RP1q1TUpVKCESAVMSUK+0p5myv8Qj20rWStTI0q5spUwzbOgEhCikhZJBFIBBS+b+cU+xPRrTSZK0T1SZ8wlSlTClJIcEWdyPCo+YMR7G7ImydMiSjWoDTAsKpZ0uDSxLsVBW4erNmPPbpqirM9Ulqrtmu34KJ9Mxj94xicfxndDRK05QhZ7P1KCUocBKzTaYmmyqjSHe2FA5wtAkdytCOzZ5lo7qYETCsFSplal5KiSgC4cuVN1jVkp1FQWrWyikUBgAx/VKmPsSUgthq3iOrkzzUDr0JqrCAlIDAnhe5dQSlTkNcFqbx0I1RkyNOZwCdBOBKgy1d4GPezqyblgCSoDevAAEI02g03Es6CeUkpUgLBqCpqilSaAbJBkoJJJP2l2DxtzdPPUpJRrUhgkNSghRSqYFkgM5UFJDAhigMzwpffEpWNdKARLCV2SxUSlal/GWC2wc2gM46jTSj3g0WoSaZgXMKV8CUFU5RBJLusAhsv5CG/YyVFA0GoCKFINLqsJaZgAFRyZsxLg+IK8xdnafU2fXSwUn3Ep2WCCMe2jIIBALc+ol6p+LWyw0xTpCEEFL8KS9waWcO4qNzYgNHsOnuUhEpUpKStKULdwErUAbksCzgciIvx57SGdwLXr5ZTYkBKACO6I8/GtK8iwSLPfS7J001IUZs7vSogggAAAJDAAW5knd8DEBmlEixTpZviJHiABBAfxcPhBFt7XeJT5ksCaDpZhKiuoAFl0mxqf2nt8ej2EiaCSdUhixuAfM7WIBIG3W5iDzeJtSh7ODTwmlJORyDtbJ8wCp4kgsrTTC1QBS5DBZVlwzm7cugeJIlyxYaaY3hbl3agpJTfcnLjwDlFgpmggHVJb2uFD5GLMMjI3HlERMW8sHUo4ib8PFxmyQ2wZLv8yYCgdPINL6WcA/hLn2UpFQKjYBmY9OkW5XdkofTzBxOnJAJmLY5wCKtwAoNaJpXNSHVqENna44X25BQsNn3tOlZllJ1KQrZYpeyCC4ZvElRxseUBTUiQCVeqzX4bsXL0qA8Vhh8JsQeURXp5BFKdLNZ0jdL0rp3OWD7OCbi7XJpmuw1KAThNIOxU77WSSLG3NnLAuYFOrUSyjJHCLOWL39mk+YOAbBUXK04X/VZhKUguElvCGFzcsQPm+8anZiAJSKUFAIBoJJKarkF93MVAiY6m1KTxksabJDOm3IG/wwbxoyZyVOUkEAs45jN4AkeEfW8Mhcjwj63hkARW1XtcNXAeH3unxxFmK+p9rip4Dxe7+18MwGVMKSr+qLPFSSyrgJIBD7YF+fR4XPkIBf1RSkgEgCqxpSXpbJcpf9gQ+dkvrgAbNwBmCqt+an5hgHiKELelOtDIDksklnOan4RuXfa0BLUzUpSqrTEguSA5cusqyBtKB+IbnC1hISQNKsuQaWWxJqNXzySxYjyh6JzLSfW0qSVFk8NwwYEjlcvZyoPsI45UCPXUtx4CQRwncKsU52wdsBBNLd4NKorBSkgZ4UhQbmBwjzcbRBZQav0VZKSzMq/C2eiS3xs4DxYRqA6VetpKQEulk3sQVG7hyoH4CFgkBjrku7OoIDG1mce6YDsxCSUlWmUyq6smm4L0jZVzbcWd4U6Qe8OkmFVRKck3NR6AVN0z8WrRMHj1iUkgtZLHYLDke8OjtDdPLmKIUjUBaH4gw2yx3f8AGAfp9BLYHugkszF7OLjyz8yd4ty0BIAAYAMB5YiUEB59MpDGvSK8VhficzFAsLPSxbYqYsEvHZqqyFK0indlE1jMsuQALjipfNywMT74lwnWMq4CVoCbjvAHBAJDgORmk4ezJy1BSz62lIGE0pJFKWU4ySSFWb/wEJoSTUrSLJLknd0szgeQZnyed5LYKCTpSUpcJZyOJZSp7N4WV5ExxrhC9c7gFmQl0gjJTzqHnyjtRAAOrDqNVYRYhSWSAXKRh83gF0ppSDpFEcISEuW4HLuzMZihfruI4uSikH1RbVU03dilVwBYBy12zmzRJU1nJ1jkMVFKAbSwoqBAcB6hhjwtmOyyVJKhrCAKXUUBIfu7njsxqSq1hiAlULfoq3Vbe3ABnADFnF7cwwgyWB9UWO7KaQX5M6WywQkOfuzHJ5IuNcHSCwISwKUqKlKa7AXYsGDZYh2qWSotrEoBduFJalq+IlqrjOATY5AJ0clIWQNMoJWC6i7iohNIDMAAOdrkczsyJKUJCUhgMCM/s0OtxqRMSAQEtfIqUS93IsWwbZjUgFyPCPreGQuR4R9bwyAIROJcsKjSWDs/R9ofCJ5YqNVPAeLl1+EBkLlMCEaIEA8N7kEhSgARw4cAkAEbFgWrWoAH1R7FwDsQt04wSBbkeYAheomgBP6W1IAW4LFgxqYikuehdg8QUlL/ANbLhi7EMFEjPh5nG7mzQDZyTUVepJKgcliSNmLWOPweOoSCo/oodLAgGxqSqrZlFgw/fD0uYFzAqojVKSC6mpNhSlYA8kE2GXu7GOGkMPW1CksNujF/2kKz5bCA7Ie36HS6mFxYMjiNrXAt+yDHJQIAPqYAeyQACP1bK6ZV/hELlqSQCdSUr8NqvYWpSgmq5tZ8skE2IiQRLCATqSUuC7qDhIUlrHDnP7IObwHUKDgHR3SAmzFkkmwJDU5t9wtD9Dq1VBA0xQmzkGySUkswGbbbEO2IrqCaF16pRcgPdJSUEFgl8lvi46CJKKVSy+qstmOKeIrIz7pZj08oC6nVTN5Xt02Oxo4uniNv2cxejN0Oplgq/SO8dQCQS9NrJfc+dy3nGlAYomVk/oYI4nJI3esYucg7EnJF4FLUQCdFcku5FqqayS2SCR1Y7XhyOzJlidQp7VAPdns7uzl/yFo7K7LUAE9+tgGFzyDEl8hvokkghSC4UnSJekHqCVHhFhhknOD0vNZNgnSOaFZIA4agEYe4Ja3tdTFj1FfCO/UwJJtdQpAZ3te/xjnqC2SDqFuMm3F4n6bj/D1gKolsQkaRNFRBYCwJTxM1weVy6Q7NDdSpVRB01YqqCha4CQDfKuuLC7xM9nTP+ZWMYAyHf4En6s3R2ct3M9RswJH7aVPlvZbG52YAKyEtSBowkEkbMBxBThuVre8fj2YFOQNGkpKmLkcQL1G4bKUZN/g8W1aFTj7ZTAYzesKBJe7AUxCR2esFzPWq4JF9qeuDT9/UuDOzZQuruRLJPNzdKX2tcY/ZeLsZp7OW19Qt735OpxwuzjD8ofo9IpBU8wqB2Ixcm1+u8A+R4R9bwyFyPCPreGQBFbVpcKATU6CKTv0frFmErUyiWJZOBv0gM1aVgltGghnsUXNqRdmYE/hEmUTxaRDFQHsktwgHFwOI3ayeZaGJ1s0Idcg1OxCTySHIzYqcD4QHXTXYac5LGu1mAJtu5PkOrQCphmXp0iLBQSSpHkLcikDeOrKgogaNLVEBTouAHCjycu34WBseuTGJMguCzAv7JLi3MN/eGLtD12bSk+rlyQ6argEK6MCCB04hcbAqQlbOdIhJCTYFJ2JCQpgzkkY/nHQJjB9MgjisCnhDINN8uoHpwjzic3XTQkEacmzlL3wrh83Cf8WI6rWTiWTIbLknk7Ni5b+IeUApcpZpV6pLJNRWklDi/CatyXJ+MO0UslwvTpQMi4VcukjGaQkcmLbRFOunEE+rkMHpKrkumz4FieePJ5euTeL7C4BI4rEhILPT71vlY3YLXqyPcGXsGuMEtnMOilJ1cwrCTIKQ5BVUDgZDbHG3lF2AxErCUqbWAklJDkFqlEkZLJJXYtwgJyBApRZ/Xku4BpCDcBiGcgcRc2sAOpiUokFP6HxEhyCAAQEX3sLNnwDlZc00oUo6JLD2XB+LBN99nuA1zAPEzI9cThLeB08Sf81xfmGxEUgpzqwywmgmm54XI8wLMfaJyHJOkhKqkaWuqnidmLjII4Wdycli8RmKNLDRuxZILFnbiYjw77QDETqWJ1YICioulLkU2SGyAbuBe0JqUUmnXIJuzhA8KRUDkvaonZziGTkMtvVAtrV2HDfc5Pyd7wkLBAWNHipmLBiFAm4Dgh8jfrAMmF0MdaC9bkUOxZgmkvwv58XlGiO0JX9qi37Q6fmIzQoKZfqfEopHVlIqJemws12zdsRJRN30YdwSxFzULvTkOVPy6uAGzBGd67Ns2nOb8QGwuHHnb7xiLOh1HeIqKSkubF9jYgkBwRfG8AyR4R9bwyFyPCPreGQBFfUe1xU8B4uXX4ZixFee/EyajQWS7P0fZ4DLKkVH9LUyXdJJcONybhhzvfyjq1pJT+lFm6h6UKBLgjhdJUSN7PiOplTUuBpZVNwBUOICq5JG9Kbdbnk+ldST6si9iXTYFSwovuGYt+0fKAqpSXH6UogEDBcqJFikWDVDbKr2AETkTEBSSNUSCXSkvcMqwa5urqSUtc2DkJmMp9PLZKhQA2CSCTliEMCByLPYQlQmEW0aGOxUlJAKQ9xv7LDlloADKmUJ1Sy6XCQ//wBiVFJq6UEt1GxERkahD1etqZlcJGzBzxAlxUDyzZrCyhMwW9XQKSKSCDYFAJ2I4Rb93ydchEx3VpUA0sSKDVwqDC9hwpF/ebZ4DiVJsj1shVVRvdgm6QFOQn2ny25d4hJASUrVqyQkhLKYOWU6T+1xAsGPCNrQ6T3mTpUJNNVlJJqJZQxfhJLvd25wpCpoQKtIgMXZJScBqgkYPIB7WcQEJVDIlo1aipRASqxKv1qiBscK+CPjFvslSVFS0TTMBCQHewSpack3uDfpd8xXPfBJKdHLCm4eJOQ1Ow5k5Ea6JYGEgYwGxiAxWSTbVqcAWDkhwm7P7RbZuIAXIjhmIAUr1sszEiosaWcXudwLg3sTeHrEwt+iI8TKcoalmcb7DbAFuXJEpYCn0qBUaiKkklXAHL2wVWHus4gOzFham9ZKVWBCQQxwWva/N/E2aWriYkLUPW1ClNJCgqxdYUSSWexI+GzCLCJU10/YSmUT3lg/6wU3e7IBfmVJIwREJiZvE+llqLuDw5KLu5zVbqOUBGVMSkMdUsG6ElT2UKQ5CskFJzly+8cmqQD/AFspd1j90u/ypP4iLUxKwbaVCgCW4kjBscb5+cLUmYSx0ksiwDqSGTZwzHrbr0eAjNnJYA6khKVF2dyDhJU7luYvdPmeJRakaklSlO5e/CBTY44kmzbHrDJ3esG0qFOlyCpIZVI4dwb2fkN8RxEuYFcOmRSS5JUHCqi53fCTbl8gnptIpQqTqVKDn7lAEWb3SPovd0Wn7tCUVFTWdWYV2YslKgZPdUqICQzbFw1snbrFyAXI8I+t4ZC5HhH1vDIAitq2ZVRITQXIyBuR1izCVh1Efs/j1gMlSpZcetTRxKqIKnB5O1gKFWL4VyMK+xIcaic5FLgzHLFRYOHe7MHOObxZlpngA93LWWeqwLs7WseIAv5ecToWlCQJEtnU4dwHWnifyKlE707EwFcTJZCgnUTQZnEm6y1AJNO1NiORZhcRySqUT/WZpJIBSVKLE4TbBseeDlnDqZxIJkynSHR0JSmoM/MqD9fm0pm2+xlu5c2YcIL5c8f8oBEmXKCUy0T18V0M9uAlhZmCS7Ho+0IkLlPUNVNeyRU96WNwQ5crZjuogNZryhOpBEqWFMxFmDEsHyzH7/hC+6mhgJMopADMAGIc2D4cJIGzZ3AKTOlKNQ1Mxi5pvSGdR2wwO7WIFg0cQuUmhPrE1NALJVVcJWCSXFxalzgOLF4sypU15dUtDhN1N4SUCqz7qcW28zEZaZzMZUp6VtYW9xNL4vdj+ZDTkzQoVJLg/hYxOM2WucFJAlISiu9w9LKuwOfDbk56RpAwHnxNlKpHrM57GkKWDcOHAvfply1mbqRLpc6uaQZju6sh1AC3hAy1rfCLAM5IB7lFhcgOcAkgDPE9rPbGYgpU5KVEaZDkktYuWSAWfk42YCAhLmygQO/mmoNcqLkFABAN8pItklUclqlKpA1E0EJJCiS6hxm5bia55WGYtBEwUpEiWKiorwwuL5uSC+LttESJxF5Et2IyOR69APLe5YEJMkBlT5qg1BCisuXe4bx7c2BHOIhckEfpU40jFSzzAKrXuMm2Od3z0zCkgyJZTxAgXLbMAbuALb9IaBOcnuZdwmxI3AqcjZJe13gKR7kqLamaCpRWE8W5QQwpuOEAZF23vzUKlUoC9ROSDKQQSrIYmon3yE3+67mLY78i8mWX2JFhYEbu4J32I3iUzvWDSZZDXTbIrfdvd+Z+AVF90AojVTUAkqN1CmriORYF9+Y+Oxom7tLEkEOKssbh/nFCmeQT3MtyBw2y5JNW4xsM9HNvRTZhKgtASEhLEYJYu17jHza7PAPkeEfW8Mhcjwj63hkARV1oSQsL8Pdqq8t/ui1FfUBXFQWVQaSee33wGSqZJaakLmks6gCQU0uopSbM4BBa5b4wqadMAQZkywU4AUXrF3ASXPEBzcDlGjVqX8MptvFhsm+Xs2OsDao5MoeLAV7pCAX/AGmJ59NwpanuK1JUZiVJQlDpBe6iAxSCavwMQmz5AC0GZMPdqLsdyCmhzewzdnJ8hfI1PExlZUUkg8xSFAHYPjltmJzDqHVSJQHs1VObjLHDP+UBRl9yaGmTWRdi96li6lbhzh8QhpDAmdNKCksW/fCiS1gKTsAM7xoS/WSXokh7EkKdhW2DcOQRiz87SPrTD9STdwy/gRf7vvvAU0DTqciZM4hW/EPbpcEi3Fb4naF6hWnSgrM2aykLA5tWKmqDgkhg9snN40lesspu6JJVSC7AUppfo9RPww9oFWqJxKAc5d8ikG/mXB5YZiFWUqQqZSmbMKlVAdHqSVAkWuDjNje0amh0KZQZJUQyRcj2QwwB9ADAAioEakMfsibu4P8AdDhrBzb740NMVt9oA7nw4ZzTndmgMML05Z5kx2C6C7tm4A4gxffJOSSYoMghX201bKK25lI7wByMgdci9xbSJ1G3dYPvcxSfIi7dc2c9/SaR+qqcPZTNxPZ3Ox235QFCXM0wsJiyC6Q7kGkpFnDWMsdL9REDqdMUpHfzClLPku6lNUyb3BDDZn2i9NTqCQ4kkXIBquQ9AcuzsC4Djq1+rE5uPuXBBSSDsrqTehzsx5wFKYiQgVmZNJWCsC7lgkmwAuKQ73w8RR3FQHeTRYrsCBYqUomlNjc5bLCLyTqSafsU+E2cm54nS+Cyh1bbIkF6kEOJZBWMO4STxEkkB2x/IvAUQZAKU95MwoAAWuoqKjSlgQTbk1oh3umMtA7yYUgqw7l3UagBcHHX5xok6kgU9yMO4UQzXZjf8m5sIp9ZZgmUnisL2SDgsckYb5bQEJPZiFgKTMmgVklyQeErBSARwhzsB4Q0XNJoEyyVJKiS/iL74D4A5QtHrG/d7YCrXRUMl3FfJuHN4s6Wukd5TXd6XbJZn6NASkeEfW8Mhcjwj63hkAQidU5paqk0vh9nbZ4fFeeRxOaRQXOG6vAVpS57YTmxLO1ac0lnoJxZxu7QSZuopLpQVBmINiXIVvby264jLkL0xCZaDMALFIBIYMinqAyAlssTzhspWnSlKwqYEgpA6EJQoAjqEpxsrLYC6JmpDumWcMcMaLhnuK+rsW6ia5modkpQQSeInActZ+Isx2z0vQm+rjvJRXML0ukBVmTUlqRbY+fmYhNnSCC65iaUAKSAXpuE4HOYDvcJ5GA0O/nhKyZYerhAvwkYsbmrJLMC+zRzvtSw+zluTcVG1ue7/BmfdhTmI04NJXMdbEJD2cnAA4S4PzPOCcrTug1LJKQtCgMgGYQaiMMpWcgjMBfEye6nQjICb5AKnVm3s82zfEdUvUWZCMJd3yWqGbAX55EZMudp6fFNAuAukvdKaj4X8MvJGCdobXp0ulUyY6klLKVVYqCHAuMj8YC8nUT3DoSxUkWuWPiJuwtfJw13eNKMPTamRKVZSwQlKaSXDGggsLAkzBc9esa+mnhaErThQBD2zzGx6QFL/Y8lwWLizvyIPx8I/wAPSOJ7ElDntuzAEEf5cmKQOmSlwtZrKlDJcoKwtQtbiWVPh1AiCR6uoFFcxQseIP4ypAvSwfvCGszYDGA0j2TLZIYikJCWOAl2th756DkIjL7Ilj3jZrqO4UP+8xmd/pygNOmhIWFE8Tk0kAOz8sXtyifcyHCQqa8wVN4WFIU5DBrIAbyDWsF7/Y0lxw4DM+clvvPzPMx3/Ysp0kAikggPYkYJGCfOM5M/TJUF94tkkgg2SHDOQ17BnD56x1S9OEFBXNYElw/sCk4GOJmbpgMA09P2XLQQUuCC4JL5FxfmP5DkIvRgLMgFKu9muoqCRd3B90hwwUAHszc7s7P0cmY5QtZEtZSXIZRsova4NV+cBtwRQ0/ZaULC61kh8q5jdhfJy+YvwC5HhH1vDIXI8I+t4ZAEInVOaWqoNL4fZ+jw+K89uJ3agu33wFZHrL3Mspqd2L01ps2HCag/lyvxBnskjurlVSQ7EEukpV71O+7vaM2TO06bBMwAoSkEkXDFVwosCAgXVYgjIaOBMhKXCJo8TOCrelyOVgwVsrAFoDRPrICj9hkl2UGDG5vc45WHWzJy9QBbusByamBpNW+Km+HnbMnabTAGWUzCA6VHYnhJJJtdhfFi9mh01ckqLoXVNFJSAL1S0uPkRc2fOAwXZg1FSW7qmkVi9yWdvv8Agd4XMM4KPdTJZS5AQprcKWApa4KV2O3KKSzpwFSwJhAINne8ksHyOE4LZ5AtwiTStBlTAyipQSdzwg5Y2a3Vrh4DTSqfxP3QbHixXd724PO/yhaFao0kiUBuLuHptli3Fff4XqqkSAS6ZhUUlRySB3hBDjeonGxOYrgSK6QmYEql02DWUpF73D55Z3LQGxpFTnAnGUxB8AUL2pABJe1T/CLsU5HZktC60gvffnk/Wd9ouQGTLn6kkMmSQ5BIJO6mu/IAG2TiJp9aAA+yJu6r8i1g16mfZvO1JMqTwkSpgsgFrMACoYyAZdxl/hCpc2QljLRN4RUAGDPYDi5vjbYXLhoqRqCziSWc3CjcDhIO1923NrXesz3dIl0umxdwGFVwWcF25vkRmTEadwChblajSBlSqSoKSNnO9s5eOKlyRSsJmKqqNvZZ1FyMElQAfdQIY3gLp9Z4HMph4ze9j8AMfI7R19SQofZAhqVAFjxBwQS/hf5i8UJsvToJ4JnAFClLN7QLOWqNJAJv5ROXMkoelM0cK3UBtdxe7uHG7+aoC4o6l0/qkh75vc8Ifo3K/wAoEHUgBJMkqa54uRYs/vM//m1RSJEpSWSsqRYNclgA5u7srJaw5M8ZelkV91TMcFnBzSkkcQv8M77kwGzpFLp+1CQpz4cHye+P5YEPjzh9Xd2mEl2LBrBI/dCbCx4edhGx2ZISlAKAUhfGQS91AO5N3gHyPCPreGQuR4R9bwyAIRPJc0kA0FicA7E9IfCJ0tyQUukpION8jPKAoTDPIUULlqHsANcPYksz22673ic0zWQFTpYc8RFnDuyXe9I/95HT2TJLvKdy5JU5ObuVPuY6nsqSCCJTEBgxsAWeztsPkIBU/vwSkTpQcumo3apQuAA4dUtLD53iwEznTxozxDmKjYWzS3xERR2bLASKC6UhIU92SXFwc1XPMwHsyXUVd2pzU/FbjDKLPuCfnAQmrnJTeZKSriKiTbxCnb3M9QMO8cmJ1Av3kssl6WZ1UmznCam69YmeypV/sjxeI1Fy3M1RKZ2bKKioynUS72y6S4BLC6QfnzMALlzqv1iQALdTQRccqrs+w5XQvvxxKnSwAXawFPFYkhyXKbuMQ09kyiEgyiaUhIJN2D7vniJfLmA9kyeL7HxF1MWcuVOSDzMASRqKuIoKQc4cMq1hY4J25RoxW0sgSxSlKmcm5G5c72HTaH1H3T935wFFMmexBmJcU0lssDVVbBLY2iMqXqQeJcs2OxZ24QBlnvnnGhUfdP3fnBUfdP3fnAZlGpGFIUPvuQ12AYXfmMAZifd6lvHLdjdjm7WbnnmwxcnQqPun7vzgqPun7vzgKC5M+oELRgA2Z2F9rXfc2OOcRL1TXXKdhcA8lPZuqfk/SNGo+6fu/OCo+6fu/OApTE6ikAFFVRdV2pu1md8BumYWuTqXLTEb02I34arXtybexjRqPun7vzgqPun7vzgIaZKgnjLlze2CTSLAYDD4Q2I1H3T935wVH3T935wEZHhH1vDIhJDAPaJwBFXV6ILIJUoMCGBtfnz/APfMxaggKf8As8MBXMsGstQ2bAjvqPKbNH99/wCYMW4ICsdJw094vzqvjDxKXpmU9az0KrfKHwQBBBBAEEEEAQQQQBBBBAEEEEAQQQQBBBBAEEEEAQQQQH//2Q==',
    },
    {
      id: '2',
      title: 'AI-Powered Chatbot Development',
      category: 'Artificial Intelligence',
      date: 'February 2025',
      description: 'A deep dive into developing AI-powered chatbots...',
      content:
        'This project explores the process of creating intelligent chatbots for customer service using AI technologies.',
      tags: ['AI', 'Chatbot', 'Automation'],
      imageUrl: '/assets/ai-chatbot.jpg',
    },
    {
      id: '3',
      title: 'Cloud Infrastructure for Startups',
      category: 'Cloud Computing',
      date: 'March 2025',
      description: 'Best practices for building a cloud infrastructure...',
      content:
        'This project focuses on setting up cloud infrastructure for startups and optimizing costs.',
      tags: ['Cloud', 'Startup', 'Infrastructure'],
      imageUrl: '/assets/cloud-infrastructure.jpg',
    },
  ]

  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const categories = [
    'All',
    'Web Development',
    'Artificial Intelligence',
    'Cloud Computing',
    'Cybersecurity',
  ]

  // Get unique tags from all projects
  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags || [])))

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory !== 'All' ? project.category === selectedCategory : true
    const matchesTags =
      selectedTags.length === 0 ||
      (project.tags && selectedTags.every((tag) => project.tags.includes(tag)))

    return matchesSearch && matchesCategory && matchesTags
  })

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    )
  }

  return (
    <CommonPage title='Project'>
      {/* Search & Category Filter in One Line */}
      <div className='mb-6 flex flex-wrap items-center gap-4'>
        <Input
          placeholder='Search projects...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: '100%', maxWidth: 300 }}
        />
        <Select
          style={{ width: '100%', maxWidth: 250 }}
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(value)}
          placeholder='Select Category'
        >
          {categories.map((category, index) => (
            <Option key={index} value={category}>
              {category}
            </Option>
          ))}
        </Select>
        <Button
          type='primary'
          onClick={() =>
            console.log(`Searching for: ${searchQuery} in category: ${selectedCategory}`)
          }
        >
          Search
        </Button>
      </div>

      {/* Tags Filter */}
      <div className='mb-6'>
        <p className='mb-2 font-semibold'>Filter by Tags:</p>
        <Space wrap>
          {allTags.map((tag) => (
            <Tag
              key={tag}
              color={selectedTags.includes(tag) ? 'blue' : 'default'}
              onClick={() => handleTagClick(tag)}
              style={{ cursor: 'pointer' }}
            >
              {tag}
            </Tag>
          ))}
        </Space>
      </div>

      {/* Project List */}
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </CommonPage>
  )
}

export default ProjectPage
