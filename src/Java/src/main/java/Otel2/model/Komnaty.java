package Otel2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otel2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Комнаты
 */
@Entity(name = "IISOtel2Комнаты")
@Table(schema = "public", name = "Комнаты")
public class Komnaty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "КомнатаОтеля")
    private Integer комнатаотеля;

    @Column(name = "Этаж")
    private Integer этаж;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Oteli")
    @Convert("Oteli")
    @Column(name = "Отели", length = 16, unique = true, nullable = false)
    private UUID _oteliid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Oteli", insertable = false, updatable = false)
    private Oteli oteli;


    public Komnaty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public Integer getКомнатаОтеля() {
      return комнатаотеля;
    }

    public void setКомнатаОтеля(Integer комнатаотеля) {
      this.комнатаотеля = комнатаотеля;
    }

    public Integer getЭтаж() {
      return этаж;
    }

    public void setЭтаж(Integer этаж) {
      this.этаж = этаж;
    }


}