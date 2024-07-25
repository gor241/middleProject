// Определяем тип Mods как объект, где ключи - строки, а значения - либо boolean, либо string, Record - это ограничитель значений
type Mods = Record<string, boolean | string>;

/** Функция для работы с классами имеет три параметра:
 * 1) cls - основное имя класса в виде строки;
 * 2) mods - объект с модификаторами класса, где ключ - имя класса, а значение - boolean или string;
 * 3) additional - массив дополнительных классов  */
export function classNames(
    cls: string,
    mods: Mods,
    additional: string[]
): string {
    return [
        cls, // добавляем основное имя класса
        ...additional, // добавляем все дополнительные классы из массива additional
        ...Object.entries(mods) // преобразуем объект mods в массив пар [ключ, значение]
            .filter(([className, value]) => Boolean(value)) // фильтруем пары, оставляя только те, у которых значение приводится к true
            .map(([className]) => className), // из оставшихся пар берем только ключи (имена классов)
    ].join(' '); // объединяем все элементы массива в одну строку с разделителем пробелом
}
