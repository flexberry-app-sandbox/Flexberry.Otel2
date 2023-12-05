package Otel2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otel2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Гости
 */
@Entity(name = "IISOtel2Гости")
@Table(schema = "public", name = "Гости")
public class Gosti {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Комната")
    private Integer комната;

    @Column(name = "ДатаЗаселения")
    private Date датазаселения;

    @Column(name = "ДатаВыезда")
    private Date датавыезда;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Avtorizaciya")
    @Convert("Avtorizaciya")
    @Column(name = "Авторизация", length = 16, unique = true, nullable = false)
    private UUID _avtorizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Avtorizaciya", insertable = false, updatable = false)
    private Avtorizaciya avtorizaciya;


    public Gosti() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКомната() {
      return комната;
    }

    public void setКомната(Integer комната) {
      this.комната = комната;
    }

    public Date getДатаЗаселения() {
      return датазаселения;
    }

    public void setДатаЗаселения(Date датазаселения) {
      this.датазаселения = датазаселения;
    }

    public Date getДатаВыезда() {
      return датавыезда;
    }

    public void setДатаВыезда(Date датавыезда) {
      this.датавыезда = датавыезда;
    }


}