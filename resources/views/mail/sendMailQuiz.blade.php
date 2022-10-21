<h2>Новая заявка</h2>
<h3>Имя:  {{ $name }} </h3>
<h3>Телефон:  +{{ $phone }} </h3>

@foreach ($data as $d)
    <p>
        Вопрос: {{ $d['question'] }}
        Ответ: {{ $d['answer'] }}
    </p>
@endforeach
